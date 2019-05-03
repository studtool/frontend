import React, {Component} from 'react';
import SignUp from './signUp.js';
import SignUpStore from '../../store/formStores/signUpStore/signUpStore.js';
import {sux} from '../../actionCreator/coreMessageTypes.js'
import Postman from 'Modules/postman';
import ActionCreator from '../../actionCreator/actionCreator.js';
import Header from '../../components/organisms/header/header.js';

/*
export default class SignUpController extends Controller{
    constructor (){

        // тут вообще магия, биндить до super() нельзя, зато после можно в объект добавить
        const handlers = {};

        super(SignUp, SignUpStore, handlers);
        Postman.on(sux.SignUpStore, "SIGNUP_INPUT" + "_change_state", this.onChange);
        this.state = SignUpStore.getState();

        // а теперь добавим наш хендлер
        this.handleSubmit = this.handleSubmit.bind(this);
        handlers["handleSubmit"] = this.handleSubmit;
        
    }
     

    handleSubmit(event) {
        this.handleEvent(
            "SIGNUP_INPUT", 
            Array.from(event.target.elements)
        );
    }
    
}
*/

export default class SignUpController extends Component {
    constructor() {
        super();
        this.state = SignUpStore.getState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        Postman.on(sux.SignUpStore, "SIGNUP_INPUT" + "_change_state", this.onChange);
    }

    handleSubmit(event) {
        event.preventDefault();
        const rawData = {
            actionName: "SIGNUP_INPUT",
            data: Array.from(event.target.elements)
        }       
        ActionCreator.create(rawData)
    }

    onChange(newState) {
        console.log(newState);
        this.setState( () => {
            return newState;
        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>SignUp Page</h1>
                <SignUp handleSubmit={this.handleSubmit} data={this.state}/>
            </div>
        );
    }
}
