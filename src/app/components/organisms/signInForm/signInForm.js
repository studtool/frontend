import React, {Component} from 'react';
import ActionCreator from '../../../../../lib/actionCreator.js';
import Actions from '../../../actions/actions.js';

import SignInFormStore from '../../../store/formStores/signInFormStore/signInFormStore.js';

import {Button} from '../../atoms/button/button.js';
import {InputText} from '../../molecules/inputText/inputText.js';

export default class SignInForm extends Component {
    constructor() {
        super();
        this.state = SignInFormStore.getState();

        SignInFormStore.subscribeToRecieveState(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        SignInFormStore.unsubscribe(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        ActionCreator.create({
            action: Actions.USER_SIGNIN,
            actionData: Array.from(event.target.elements),
        });
    }

    render() {
        const qa = this.props.qa ? this.props.qa : 'no-qa';
        return (
            <>
                <div className={'signup-form'} qa={qa}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={'email'}>
                            <InputText
                                qa="email-input"
                                name="email"
                                type="email"
                            >
                                Email
                            </InputText>
                        </div>

                        <div className={'password'}>
                            <InputText
                                name="password"
                                type="password"
                            >
                                Пароль
                            </InputText>
                        </div>
                        <div>
                            <span>{this.state.signIn__errorMessage}</span>
                        </div>

                        <div className={'submit'}>
                            <Button type="submit" value="SignIn">SignIn</Button>
                        </div>
                    </form>
                </div>
            </>
        );
    };
}
