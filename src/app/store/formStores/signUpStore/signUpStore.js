import Postman from 'Modules/postman'
import { fetchModule } from 'Modules/ajax';
import {Store} from "App/store/store";
import SignUpLogic from './signUpLogic';
import {sux} from 'App/actionCreator/coreMessageTypes.js'

class SignUpStore extends Store{
    constructor(){
        super();
        this.state = {
            "email__errorMessage": "",
            "password__errorMessage": "",
            "passwordRepeat__errorMessage": ""
        };

        this.handle = this.handle.bind(this);
        this.getState = this.getState.bind(this);
    }

    handle(action, payload) {
        switch(action) {
            case "SIGNUP_INPUT":
                const newState = SignUpLogic.execLogic(payload);
                this.updateState(newState);
                Postman.emit(sux.SignUpStore, action+"_change_state", this.state);
        }
    }

    updateState(newState) {
        for (let key in newState) {
            this.state[key] = newState[key];
        }
    }

    getState() {
        return this.states;
    }
}

export default new SignUpStore;
