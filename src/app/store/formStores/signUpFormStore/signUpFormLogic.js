import SignUpValidator from 'App/validators/signUpValidator.js';
import AuthModel from '../../../../models/authModel.js';
import ActionCreator from '../../../../../lib/actionCreator.js';
import {PasswordMatchError, EmailPatternError} from '../../../errors/inputValidationErrors.js';
import {initialState} from './signUpFormStore.js';

class SignUpLogic {
    async signUp({payload, state} = {}) {
        if (this.validate(payload, state)) {
            try {
                const signUpResult = await AuthModel.signUp(payload); // регистрируемся
                try {
                    const signInResult = await AuthModel.signIn(signUpResult);

                    // TODO заменить на createBatch
                    ActionCreator.create({
                        action: 'SUCCESS_SIGNUP',
                    });
                    ActionCreator.create({
                        action: 'SUCCESS_SIGNIN',
                        actionData: signInResult,
                    });
                } catch (error) {
                    state['signUp_errorMessage'] = 'у нас не получилось залогинить вас в систему';
                    ActionCreator.create({
                        action: 'FAILED_SIGNUP',
                    });
                }
            } catch (error) {
                if (error === 409) {
                    state['signUp_errorMessage'] = 'такой пользователь уже существует';
                } else if (error === 422) {
                    state['signUp_errorMessage'] = 'некорректные данные для регистрации';
                } else if (error instanceof TypeError) {
                    state['signUp_errorMessage'] = 'возникли проблемы с сетью';
                }
                ActionCreator.create({
                    action: 'FAILED_SIGNUP',
                });
            }
        } else {
            ActionCreator.create({
                action: 'INCORRECT_USER_INPUT_SIGNUP',
            });
        }
    }

    validate(payload, state) {
        /**
         * на каждый вызов функции нужен независимый объект, чтобы в случае ввода верного пароля
         * сообщения об ошибках убирались
         */
        const stateTemplate = {...initialState};
        let passedValidation = true;
        SignUpValidator.allValidations.forEach( (validation) => {
            try {
                validation(payload);
            } catch (error) {
                passedValidation = false;

                if (error instanceof PasswordMatchError) {
                    stateTemplate['password__errorMessage'] = 'пароли не совпадают';
                    stateTemplate['passwordRepeat__errorMessage'] = 'пароли не совпадают';
                } else if (error instanceof EmailPatternError) {
                    stateTemplate['email__errorMessage'] = 'неверный email';
                }
            }
        });

        /**
         * меняем состояние в сторе
         * если были ошибки, в state попадут сообщения
         * если после ошибок все было введено верно, сообщения об ошибках заполнятся
         * пустыми "" из шаблона, таким образом они пропадут
         */
        for (const key in stateTemplate) {
            state[key] = stateTemplate[key];
        }
        return passedValidation;
    }
}

export default new SignUpLogic;
