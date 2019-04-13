import React, { Suspense, lazy }  from 'react';
import Dispatcher from 'App/dispatcher/dispatcher';
import SignInStore from 'App/store/signInStore/signInStore';
import actions from 'App/common/actionTypes.js';

export default class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: '', val:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value; //target.type === 'checkbox' ? target.checked : 
        const name = target.name;
        
        this.setState({
          [name]: value
        }); 
    }

    handleSubmit(event) {
        
        const action = actions()
        Dispatcher.exec(this.state, action.signInForm);
        const val = SignInStore.getState();
        // this.setState({value: val});
        console.log("new state", val);
        event.preventDefault();
    }

    render(){
        const modifiers = this.props.modifiers ? this.props.modifiers : ''
        return (
            <div className={'signin' + modifiers}>
                <h1>{"SignIn"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className={'email' + modifiers}>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className={'password' + modifiers}>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className={'submit' + modifiers}>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                
            </div>
        )
    }
}
