import React, {Component} from 'react';
import ActionCreator from '../../../../../lib/actionCreator.js';
import Actions from '../../../actions/actions.js';

import {Button} from '../../atoms/button/button.js';
import {InputText} from '../../molecules/inputText/inputText.js';

import SignUpFormStore from '../../../store/formStores/signUpFormStore/signUpFormStore.js';

export class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = SignUpFormStore.getState();

        SignUpFormStore.subscribeToRecieveState(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        SignUpFormStore.unsubscribe(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        ActionCreator.create({
            action: Actions.USER_SIGNUP,
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
                            <span>{this.state.email__errorMessage}</span>
                        </div>

                        <div className={'password'}>
                            <InputText
                                name="password"
                                type="password"
                            >
                                Пароль
                            </InputText>
                            <span>{this.state.password__errorMessage}</span>
                        </div>

                        <div className={'password-repeat'}>
                            <InputText
                                name="passwordRepeat"
                                type="password"
                            >
                                Повторите пароль
                            </InputText>
                            <span>{this.state.passwordRepeat__errorMessage}</span>
                        </div>

                        <div className={'submit'}>
                            <Button type="submit" value="SignUp">SignUp</Button>
                        </div>
                    </form>
                </div>
            </>
        );
    };
}
