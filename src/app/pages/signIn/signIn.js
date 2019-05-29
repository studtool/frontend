import React, {Component} from 'react';
import Bus from 'bus-graph';

import SignInForm from '../../components/organisms/signInForm/signInForm.js';
import Header from '../../components/organisms/header/header.js';


export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.onSuccessSignUp = this.onSuccessSignUp.bind(this);
        Bus.on('SIGNIN__redirect', this.onSuccessSignUp);
    }

    onSuccessSignUp() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>SignUp Page</h1>
                <SignInForm/>
            </div>
        );
    }
}
