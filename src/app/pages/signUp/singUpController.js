import React, {Component} from 'react';
import SignUp from './signUp.js';
import SignUpFormStore from '../../store/formStores/signUpFormStore/signUpFormStore.js';
import {sux} from '../../actionCreator/coreMessageTypes.js';
import Postman from 'Modules/postman';
import ActionCreator from '../../actionCreator/actionCreator.js';
import Header from '../../components/organisms/header/header.js';

/**
 * Класс контроллер страницы регистрации
 */
export default class SignUpController extends Component {
    constructor(props) {
        super(props);
        this.state = SignUpFormStore.getState();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuccessSignUp = this.onSuccessSignUp.bind(this);

        Postman.on(sux.SignUpFormStore, 'SIGNUP_CONTROLLER__change_state', this.onChange);
        Postman.on(sux.SignUpFormStore, 'SIGNUP_CONTROLLER__redirect', this.onSuccessSignUp);
    }

    /**
     * обработка сабмита формы регистрации
     * @param {event} event - событие сабмита формы
     */
    handleSubmit(event) {
        event.preventDefault();
        const rawData = {
            actionName: 'USER_SIGNUP',
            data: Array.from(event.target.elements),
        };
        ActionCreator.create(rawData);
    }

    /**
     * обновление состояния в контроллере
     * @param {object} newState - новое состояние формы
     */
    onChange(newState) {
        this.setState( () => {
            return newState;
        });
    }

    /**
     * редирект на главную после удачной регистрации
     */

    onSuccessSignUp() {
        this.props.history.push('/');
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
