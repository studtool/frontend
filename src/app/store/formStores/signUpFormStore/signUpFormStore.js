import BaseStore from '../../../../../lib/baseStore.js';
import SignUpLogic from './signUpFormLogic.js';
/**
 * начальное состояние стора при его создание, так же служит пустым шаблоном состояния стора.
 * данный шаблон используется в логике стора
 */
export const initialState = {
    'email__errorMessage': '',
    'password__errorMessage': '',
    'passwordRepeat__errorMessage': '',
    'signUp__errorMessage': '',
};


class SignUpFormStore extends BaseStore {
    constructor() {
        super(initialState);
    }

    /**
     * События на которые реагирует store
     * @return {object}
     */
    getHandledActions() {
        return {
            'USER_SIGNUP': {
                callback: (args) => {
                    SignUpLogic.signUp(args);
                },
                arguments: {
                    state: this.state,
                },
            },
            'INCORRECT_USER_INPUT_SIGNUP': {
                callback: (args) => {
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },

            'FAILED_SIGNUP': {
                callback: (args) => {
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },

            'SUCCESS_SIGNUP': {
                arguments: {
                    event: 'SIGNUP__redirect',
                },
            },
        };
    }
}

export default new SignUpFormStore;
