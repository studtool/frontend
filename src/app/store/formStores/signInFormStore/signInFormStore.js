import BaseStore from '../../../../../lib/baseStore.js';
import SignInFormLogic from './signInFormLogic.js';

export const initialState = {
    'signIn__errorMessage': '',
};

class SignInFormStore extends BaseStore {
    constructor() {
        super(initialState);
    }

    getHandledActions() {
        return {
            'USER_SIGNIN': {
                callback: (args) => {
                    SignInFormLogic.signIn(args);
                },
                arguments: {
                    state: this.state,
                },
            },

            'SUCCESS_SIGNIN': {
                arguments: {
                    event: 'SIGNIN_CONTROLLER__redirect',
                },
            },

            'FAILED_SIGNIN': {
                arguments: {
                    event: 'SIGNIN_CONTROLLER__change_state',
                    data: this.state,
                },
            },
        };
    }
}

export default new SignInFormStore;
