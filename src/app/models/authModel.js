import { fetchModule } from 'Modules/ajax.js';
import { setCookie, getCookie, deleteCookie } from 'Modules/utils.js';
// import Bus from 'Modules/Bus.js';

export default class AuthModel {
	static Register (data) {
		return fetchModule.doPost({ path: '/auth/profiles', body: data })
			.then(response => {
				console.log('Registration response: ', response);
				if (response.status === 200) {
					const username = data.username;
                    const password = data.password;
                    console.log("Got data", username, password);
                    
					// Bus.emit('submit-data-signin', { username, password });
				}
				if (response.status === 409) { // TODO на новом сервере ответы != 200 не падают в catch
					// Bus.emit('unsuccess-signup');
				}
				if (response.status === 422) {
					return Promise.reject(response.status);
				}
			})
			.catch(() => {
				// Bus.emit('unsuccess-signup');
			});
	}

    static SignIn (data) {
		return fetchModule.doPost({ path: '/auth/sessions', body: data })
			.then(response => {
				console.log('SignIN response: ', response);
				if (response.status === 200) {
					return response.json();
				}
				if (response.status === 401) {
					// Bus.emit('unsuccess-signin');
				}
				if (response.status === 422) {
					// Bus.emit('unsuccess-signin');
				}
			})
			.then((user) => {
				setCookie('id', user.profile_id.toString());
				setCookie('auth_token', user.auth_token);
				setCookie('refresh_token', user.refresh_token);
				// Bus.emit('wipe-views');
			})
			.catch((err) => {
				console.log(err);
				// Bus.emit('unsuccess-signin');
			});
	}
	
	/*
	static SignOut () {
		const authToken = getCookie('auth_token');
		const signOutHeaders = {
			'Authorization': 'Bearer ' + authToken
		};
		fetchModule.doDelete({ path: '/auth/session', headers: signOutHeaders })
			.then(response => {
				if (response.status === 200) {
					deleteCookie('id');
					deleteCookie('auth_token');
					deleteCookie('refresh_token');
					Bus.emit('wipe-views');
				}
				if (response.status === 401) {
					Bus.emit('wipe-views');
				}
			})
			.catch((err) => {
				console.log('SIGNOUT ERR', err);
			});
    }
    */
}
