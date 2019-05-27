import fetchModule from '../modules/fetchModule.js';

export default class AuthModel {
    static async signUp(userData = {}) {
        try {
            const response = await fetchModule.doPost({path: '/public/auth/profiles', body: userData});
            if (response.status === 200) {
                return userData;
            } else {
                throw response.status;
            }
        } catch (error) {
            throw error;
        }
    }

    static async signIn(userData = {}) {
        try {
            const response = await fetchModule.doPost({path: '/public/auth/sessions', body: userData});
            if (response.status === 200) {
                const responseData = await response.json();
                return responseData;
            } else {
                throw response.status;
            }
        } catch (error) {
            throw error;
        }
    }

    static async signOut(userData = {}) {
        try {
            console.log('123');
            const response = await fetchModule.doDelete({path: `/protected/auth/session/${userData.sessionId}`});
            if (response.status !== 200) {
                throw response.status;
            }
        } catch (error) {
            throw error;
        }
    }

    static async refreshSession(userData = {}) {
        try {
            const response = await fetchModule.doPatch({path: `/public/auth/session/${userData.sessionId}`});
            if (response.status !== 200) {
                throw response.status;
            }
        } catch (error) {
            throw error;
        }
    }
}
