import AuthModel from '../../../models/authModel.js';
import moment from 'moment';

class UserStoreLogic {
    saveTokens({payload} = {}) {
        for (const key in payload) {
            localStorage.setItem(`${key}`, payload[key]);
        }
    }

    async signOut() {
        const sessinId = localStorage.getItem('sessionId');
        try {
            await AuthModel.signOut({sessinId});
            localStorage.clear();
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
                const sessionId = localStorage.getItem('sessionId');
                try {
                    await AuthModel.refreshSession({sessionId});
                } catch (error) {
                    console.log('error in refresh session', error);
                }
            }
        }
    }
}

export default new UserStoreLogic;
