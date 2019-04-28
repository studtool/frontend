import React, {Component} from 'react';
import SignUp from './signUp.js';
import SignUpFormStore from 'App/store/formStores/signUpFormStore/signUpFormStore.js';
import {sux} from 'App/actionCreator/coreMessageTypes.js'
import Postman from 'Modules/postman';
import ActionCreator from 'App/actionCreator/actionCreator.js';

/*
export default class SignUpController extends Controller{
    constructor (){

        // тут вообще магия, биндить до super() нельзя, зато после можно в объект добавить
        const handlers = {};

        super(SignUp, SignUpStore, handlers);
        Postman.on(sux.SignUpStore, "USER_SIGNUP" + "_change_state", this.onChange);
        this.state = SignUpStore.getState();

        // а теперь добавим наш хендлер
        this.handleSubmit = this.handleSubmit.bind(this);
        handlers["handleSubmit"] = this.handleSubmit;
        
    }
     

    handleSubmit(event) {
        this.handleEvent(
            "USER_SIGNUP", 
            Array.from(event.target.elements)
        );
    }
    
}
*/

export default class SignUpController extends Component {
    constructor(props) {
        super(props);
        this.state = SignUpFormStore.getState();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuccessSignUp = this.onSuccessSignUp.bind(this);

        Postman.on(sux.SignUpFormStore, "SIGNUP_CONTROLLER__change_state", this.onChange);
        Postman.on(sux.SignUpFormStore, "SIGNUP_CONTROLLER__redirect", this.onSuccessSignUp);
    }

    handleSubmit(event) {
        event.preventDefault();
        const rawData = {
            actionName: "USER_SIGNUP",
            data: Array.from(event.target.elements)
        }       
        ActionCreator.create(rawData)
    }

    onChange(newState){
        this.setState( () => {
            return newState;
        });
    }

    onSuccessSignUp(){
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>SignUp Page</h1>
                <SignUp handleSubmit={this.handleSubmit} data={this.state}/>
            </div>
        );
    }
}
