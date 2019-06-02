import BaseStore from '../../../../lib/baseStore.js';
import UserStoreLogic from './userStoreLogic.js';


export const initialState = {
    isLogedIn: false,
};

class UserStore extends BaseStore {
    constructor() {
        super(initialState);
    }

    /**
     * События на которые реагирует store
     * @return {object}
     */
    getHandledActions() {
        return {
            'SUCCESS_SIGNIN': {
                callback: (args) => {
                    UserStoreLogic.saveTokens(args);
                },
                arguments: {
                    state: this.state,
                },
            },
            'USER_SIGNOUT': {
                callback: (args) => {
                    UserStoreLogic.signOut(args);
                },
                arguments: {
                    state: this.state,
                },
            },
            'CHECK_AUTH': {
                callback: (args) => {
                    UserStoreLogic.checkAuth(args);
                },
                arguments: {
                    state: this.state,
                },
            },
        };
    }
}


export default new UserStore;
