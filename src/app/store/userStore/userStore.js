import BaseStore from '../baseStore.js';
import UserStoreLogic from './userStoreLogic.js';


class UserStore extends BaseStore {
    constructor() {
        super();
        this.handledActions = this.getHandledActions();
    }

    /**
     * События на которые реагирует store
     * @return {object}
     */
    getHandledActions() {
        return {
            'SUCCESS_SIGNUP': {
                callback: (args) => {
                    UserStoreLogic.saveTokens(args);
                },
                arguments: {},
            },
        };
    }
}


export default new UserStore;
