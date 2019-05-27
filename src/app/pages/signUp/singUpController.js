import React, {Component} from 'react';
import Bus from 'bus-graph';

import Actions from '../../actions/actions.js';
import SignUp from './signUp.js';
import SignUpFormStore from '../../store/formStores/signUpFormStore/signUpFormStore.js';
import ActionCreator from '../../../../lib/actionCreator.js';
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

        Bus.on('SIGNUP_CONTROLLER__change_state', this.onChange);
        Bus.on('SIGNUP_CONTROLLER__redirect', this.onSuccessSignUp);
    }
    /**
     *  TODO когда происходит unmount компонента нужно вернуть стор в исходное состояние.
     * иначе при повторном заходе на странцицу без перезагрузки на странице,к примеру,
     * могут быть старые сообщения об ошибках
     */

    /**
     * обработка сабмита формы регистрации
     * @param {event} event - событие сабмита формы
     */
    handleSubmit(event) {
        event.preventDefault();
        ActionCreator.create({
            action: Actions.USER_SIGNUP,
            actionData: Array.from(event.target.elements),
        });
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
