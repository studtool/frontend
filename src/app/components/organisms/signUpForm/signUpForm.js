import React, {Component} from 'react';
import {Button} from '../../atoms/button/button.js';
import {InputText} from '../../molecules/inputText/inputText.js';

export class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            qa = false,
            data = {},
            handleSubmit = null,
        } = this.props;

        return (
            <>
                <div className={'signup-form'} data-qa={qa ? 'signup-form' : void 0}>
                    <h1>{'SignUp'}</h1>  {/* TODO вынести в children */}
                    <form onSubmit={handleSubmit}>
                        <div className={'email'}>
                            <InputText
                                qa="email-input"
                                name="email"
                                type="email"
                            >
                                Email
                            </InputText>
                            <span>{data.email__errorMessage}</span>
                        </div>

                        <div className={'password'}>
                            <InputText
                                name="password"
                                type="password"
                            >
                                Пароль
                            </InputText>
                            <span>{data.password__errorMessage}</span>
                        </div>

                        <div className={'password-repeat'}>
                            <InputText
                                name="passwordRepeat"
                                type="password"
                            >
                                Повторите пароль
                            </InputText>
                            <span>{data.passwordRepeat__errorMessage}</span>
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
