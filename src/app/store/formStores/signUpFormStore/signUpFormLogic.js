import SignUpValidator from 'App/validators/signUpValidator.js';
import AuthModel from '../../../../models/authModel.js';
import ActionCreator from '../../../actionCreator/actionCreator.js'


class SignUpLogic {

    async execLogic(payload, state) {
        let newState = {};
        newState = this.validate(payload);

        // в этом цикле по ссылке заполняется this.state из signUpFormStore
        for (let key in newState.state){
            state[key] = newState.state[key];
        }

        if (newState.passedValidation) {
            try {
                const signUpResult = await AuthModel.signUp(payload) // регистрируемся
                try {
                    // TODO сохранять все токены и id в indexDB
                    const signInResult = await AuthModel.signIn(signUpResult) // автоматически логиним пользователя
                    ActionCreator.create({
                        actionName: "SUCCESS_SIGNUP"
                    });
                } catch (error) {
                    state["signUp_errorMessage"] = "у нас не получилось залогинить вас в систему"
                }

            } catch (error) {
                if (error === 409) {
                    state["signUp_errorMessage"] = "такой пользователь уже существует"
                } else if (error === 422) {
                    state["signUp_errorMessage"] = "некорректные данные для регистрации"
                } else if (error instanceof TypeError) {
                    state["signUp_errorMessage"] = "возникли проблемы с сетью"
                }

                ActionCreator.create({
                    actionName: "FAILED_SIGNUP"
                });
            }
        } else {
            ActionCreator.create({
                actionName: "INCORRECT_USER_INPUT_SIGNUP"
            });
        }
    }


    validate(payload) {
        let passedValidation = 1;
        let summaryResult = {}; 
        summaryResult.state = SignUpValidator.allValidations.reduce( (acc, validation) => {
            let oneValidationResult = validation(payload);
            if (oneValidationResult.wasError) {
                passedValidation = 0;
            }

            for (let key in oneValidationResult) {
                if ( key != "wasError") {
                    acc[key] = oneValidationResult[key]
                }
            }

            return acc;
        }, {});
        summaryResult.passedValidation = passedValidation;
        return summaryResult;
    }
}

export default new SignUpLogic;
