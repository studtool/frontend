import fetchModule from "../modules/fetchModule.js";

export default class AuthModel {

    static async signUp (userData = {}) {
        try{
            const response = await fetchModule.doPost({ path: "/auth/profiles", body: userData });
            console.log(response);

            if (response.status === 200) {
                return userData;
            } else {
                throw response.status;
            }
        } catch (error) {
            throw error;
        }
    }

    static async signIn (userData = {}) {
        try {
            const response = await fetchModule.doPost({ path: "/auth/sessions", body: userData });
            if (response.status === 200) {
                return userData;
            } else {
                throw response.status;
            }
        } catch (error) {
            throw error;
        }
    }
}

