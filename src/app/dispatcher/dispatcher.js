import SignUpFormStore from 'App/store/formStores/signUpFormStore/signUpFormStore.js';

class Dispatcher {
    dispatch(action, payload = {}) {
        SignUpFormStore.handle(action, payload);
    }
}

export default new Dispatcher;
