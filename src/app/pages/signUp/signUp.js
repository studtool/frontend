import React from 'react';
import Bus from 'bus-graph';

import {SignUpForm} from '../../components/organisms/signUpForm/signUpForm';
import Header from '../../components/organisms/header/header.js';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccessSignUp = this.onSuccessSignUp.bind(this);
        Bus.on('SIGNUP__redirect', this.onSuccessSignUp);
    }

    onSuccessSignUp() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>SignUp Page</h1>
                <SignUpForm/>
            </div>
        );
    }
}
