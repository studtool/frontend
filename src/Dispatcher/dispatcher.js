import RegistrationFormStore from '../Stores/FormStores/RegistrationFormStore/RegistrationFormStore.js';

// TODO придумать механизим чтобы отправлять сообщение вообще всем сторам
class Dispatcher {
    dispatch(action, payload) {
        RegistrationFormStore.changeState(action, payload);
    }
}

export default new Dispatcher;