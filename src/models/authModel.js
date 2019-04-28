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




    // static signUp (userData = {}) {
    //     return new Promise( async (resolve, reject) => {
    //         const response = await fetchModule.doPost({ path: "/auth/profiles", body: userData });
    //         console.log(response);
    //         if (response.status === 200) {
    //             resolve(userData);
    //         } else if (response.status === 409) {
    //             reject("user already exists");
    //         } else if (response.status === 422) {
    
    //         }
    //     })
    // }


    // static signIn(userData = {}) {

    //     return new Promise( async (resolve, reject) => {
    //         const response = await fetchModule.doPost({ path: "/signin", body: userData });

    //         if (response.status === 200) {
    //             resolve("success"); // будет круто если с сервера сразу придут все данные о пользователе и не придется делять дополнительный запрос
    //         } else if (response.status === 401) {
    //             reject("incorrect login/password");
    //         }
    //     })
    // }
}

