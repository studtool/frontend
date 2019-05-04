import React from 'react';
import {SignUpForm} from '../../components/organisms/signUpForm/signUpForm';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SignUpForm
                handleSubmit={this.props.handleSubmit}
                data={this.props.data}
            />
        );
    }
}
