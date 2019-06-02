import React, {Component} from 'react';
import Bus from 'bus-graph';

import Actions from '../../actions/actions.js';
import SignIn from './signIn.js';
import SignInFormStore from '../../store/formStores/signInFormStore/signInFormStore.js';
import ActionCreator from '../../../../lib/actionCreator.js';

import Header from '../../components/organisms/header/header.js';

export default class SignInController extends Component {
    constructor(props) {
        super(props);

        this.state = SignInFormStore.getState();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuccessSignIn= this.onSuccessSignIn.bind(this);

        Bus.on('SIGNIN_CONTROLLER__change_state', this.onChange);
        Bus.on('SIGNIN_CONTROLLER__redirect', this.onSuccessSignUp);
    }

    handleSubmit(event) {
        event.preventDefault();
        ActionCreator.create({
            action: Actions.USER_SIGNIN,
            actionData: Array.from(event.target.elements),
        });
    }

    onChange(newState) {
        this.setState( () => {
            return newState;
        });
    }

    onSuccessSignIn() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>SignIn Page</h1>
                <SignIn handleSubmit={this.handleSubmit} data={this.state}/>
            </div>
        );
    }
}
