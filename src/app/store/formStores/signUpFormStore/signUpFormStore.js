import Postman from 'Modules/postman'
import {Store} from "App/store/store";
import SignUpLogic from './signUpFormLogic';
import {sux} from 'App/actionCreator/coreMessageTypes.js'

class SignUpFormStore extends Store{
    constructor(){
        super();
        this.state = {
            "email__errorMessage": "",
            "password__errorMessage": "",
            "passwordRepeat__errorMessage": "",
            "signUp__errorMessage": ""
        };

        this.handle = this.handle.bind(this);
        this.getState = this.getState.bind(this);
    }

    

    handle(action, payload) {
        switch(action) {
            case "USER_SIGNUP":
                SignUpLogic.execLogic(payload,this.state)
                break;
            /**
             * следующие два события можно объединить в одно,
             * но мне почему-то кажется, что ошибки, связанные с пользовательским вводом 
             * и с работой с базой и сетью, лучше разнести в разные события
             */
            case "INCORRECT_USER_INPUT_SIGNUP":
                console.log(this.state);
                Postman.emit(sux.SignUpFormStore, "SIGNUP_CONTROLLER__change_state", this.state);
                break;
            
            case "FAILED_SIGNUP":
                console.log(this.state);
                Postman.emit(sux.SignUpFormStore, "SIGNUP_CONTROLLER__change_state", this.state);
                break;
            case "SUCCESS_SIGNUP":
                Postman.emit(sux.SignUpFormStore, "SIGNUP_CONTROLLER__redirect");
                break;
        }
    }

    getState() {
        return this.states;
    }
}

export default new SignUpFormStore;
