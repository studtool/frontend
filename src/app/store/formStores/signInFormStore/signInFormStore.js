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
                    event: 'SIGNIN__redirect',
                },
            },

            'FAILED_SIGNIN': {
                callback: (args) => {
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },
        };
    }
}

export default new SignInFormStore;
