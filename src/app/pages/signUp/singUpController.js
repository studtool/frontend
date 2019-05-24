import React, {Component} from 'react';
import Bus from 'bus-graph';

import SignUp from './signUp.js';
import SignUpFormStore from '../../store/formStores/signUpFormStore/signUpFormStore.js';
import ActionCreator from '../../../../lib/actionCreator.js';
import Header from '../../components/organisms/header/header.js';
// console.log(UserStore);
// console.log(SignUpFormStore);
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

        Bus.on('SIGNUP_CONTROLLER__change_state', this.onChange);
        Bus.on('SIGNUP_CONTROLLER__redirect', this.onSuccessSignUp);
    }

    /**
     * обработка сабмита формы регистрации
     * @param {event} event - событие сабмита формы
     */
    handleSubmit(event) {
        event.preventDefault();
        const rawData = {
            action: 'USER_SIGNUP',
            actionData: Array.from(event.target.elements),
        };
        ActionCreator.create(rawData);
    }

    /**
     * обновление состояния в контроллере
     * @param {object} newState - новое состояние формы
     */
    onChange(newState) {
        // console.log(newState);
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
