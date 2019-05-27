import React, {Component} from 'react';
import {Button} from '../../atoms/button/button.js';
import {InputText} from '../../molecules/inputText/inputText.js';

export default class SignInForm extends Component {
    constructor() {
        super();
    }

    render() {
        const qa = this.props.qa ? this.props.qa : 'no-qa';
        return (
            <>
                <div className={'signup-form'} qa={qa}>
                    <form onSubmit={this.props.handleSubmit}>
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
                            <span>{this.props.data.signIn__errorMessage}</span>
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
