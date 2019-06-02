import moment from 'moment';
import ActionCreator from '../../../../lib/actionCreator.js';
import Actions from '../../actions/actions.js';

import AuthModel from '../../../models/authModel.js';

class UserStoreLogic {
    saveTokens({payload, state} = {}) {
        for (const key in payload) {
            localStorage.setItem(`${key}`, payload[key]);
        }
        state.isLogedIn = true;
    }

    async signOut({state} = {}) {
        const sessionId = localStorage.getItem('sessionId');
        const authToken = localStorage.getItem('authToken');
        try {
            await AuthModel.signOut({sessionId, authToken});
            localStorage.clear();
            state.isLogedIn = false;
            ActionCreator.create({
                action: Actions.SUCCESS_SIGNOUT,
            });
        } catch (error) {
            console.log('error in signout', error);
        }
    }


    // TODO добавить проверки на наличие каких либо полей в localstorage
    async checkAuth({state} = {}) {
        if (!localStorage.getItem('sessionId')) {
            state.isLogedIn = false;
        } else {
            const expireTime = moment(localStorage.getItem('expireTime')).format();
            const now = moment(new Date()).format();
            if (expireTime > now) {
                state.isLogedIn = true;
            } else {
                const refreshToken = localStorage.getItem('refreshToken');
                const sessionId = localStorage.getItem('sessionId');
                try {
                    await AuthModel.refreshSession({refreshToken, sessionId});
                } catch (error) {
                    console.log('error in refresh session', error);
                }
            }
        }
    }
}

export default new UserStoreLogic;
