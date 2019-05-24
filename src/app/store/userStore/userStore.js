import BaseStore from '../../../../lib/baseStore.js';
import UserStoreLogic from './userStoreLogic.js';

/**
 * сделать функцию проверяющую наличие токена, его expireTime
 * если есть токен проверить epxireTime, если он протух то сделать запрос с  таймаутом.
 * если токена нет то неавторизован
 */

 /**
  * TODO подумать как не пересчитывать авторизацию после вызова супер
  */
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
            },
            'USER_SIGNOUT': {
                callback: (args) => {
                    UserStoreLogic.signOut(args);
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
