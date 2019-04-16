// пока хз как при удачном fetch переключиться на стор новой странички
import Bus from '../../../Bus.js';

import RegistrationLogic from './RegistrationLogic.js'
class RegistrationFormStore {
    constructor() {
        this.state = {
            "email__errorMessage": "",
            "password__errorMessage": "",
            "passwordRepeat__errorMessage": ""
        };
    }

    getState() {
        return this.state
    }

    changeState(action, payload) {
        switch(action) {
            case "REGISTRATION_INPUT":
                const newState = RegistrationLogic.execLogic(payload);
                this.updateState(newState);
                Bus.emit(action+"_change_state", this.state);
        }
    }

    updateState(newState) {
        for (let key in newState) {
            this.state[key] = newState[key];
        }
    }
}


export default new RegistrationFormStore;