import React, {Component} from 'react';
import SignInForm from '../../components/organisms/signInForm/signInForm.js';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SignInForm
                handleSubmit={this.props.handleSubmit}
                data={this.props.data}
            />
        );
    }
}
