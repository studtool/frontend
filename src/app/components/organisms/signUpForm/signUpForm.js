import React, {Component} from 'react';
import {Button} from '../../atoms/button/button.js';
import {InputText} from '../../molecules/inputText/inputText.js';

export class SignUpForm extends Component{

    constructor(props){
        super(props)
    }

    render (){
        const qa = this.props.qa ? this.props.qa : 'no-qa';
        return (
            <>
                <div className={'signup-form'} qa={qa}>
                    <h1>{"SignUp"}</h1>  {/* TODO вынести в children */}
                    <form onSubmit={this.props.handleSubmit}>
                        <div className={'email'}>
                            <InputText 
                                qa="email-input"
                                name="email" 
                                type="email" 
                            >
                                Email
                            </InputText>
                            <span>{this.props.data.email__errorMessage}</span>
                        </div>

                        <div className={'password'}>
                            <InputText 
                                name="password" 
                                type="password" 
                            >
                                Пароль
                            </InputText>
                            <span>{this.props.data.password__errorMessage}</span>
                        </div>

                        <div className={'password-repeat'}>
                            <InputText 
                                name="passwordRepeat" 
                                type="password"
                            >
                                Повторите пароль
                            </InputText>
                            <span>{this.props.data.passwordRepeat__errorMessage}</span>
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
