import React, { Suspense, lazy }  from 'react';
// import Dispatcher from 'App/dispatcher/dispatcher';
// import SignUpStore from 'App/store/signUpStore/signUpStore';
// import actions from 'App/common/actionTypes.js';
// import AuthModel from 'App/models/authModel.js';

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: '', val:'', data: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.model = new AuthModel;
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
        debugger;
        console.log(event);
        
        this.props.handleEvent(event);
        // const action = actions()
        // const data = {};
        // data["email"] = this.state.email;
        // data["password"] = this.state.password;
        // console.log("cur state:", data);
        // var _login = AuthModel.SignIn(data);
        // console.log("res login:", _login);
        
        // // Dispatcher.exec(this.state, action.signUpForm);
        // // const val =  SignUpStore.getState();
        // // this.setState({value: val});
        // // console.log("new state", val);
        // event.preventDefault();
    }


    componentDidMount() {
        const form = document.getElementById('signUpForm');
        console.log(form);
        console.log(this.props.handleEvent);

        form.addEventListener("submit", this.props.handleEvent);   
    }


    render(){
        const modifiers = this.props.modifiers ? this.props.modifiers : ''
        return (
            <div className={'signup' + modifiers}>
                <h1>{"SignUp"}</h1>
                <form onSubmit={this.handleEvent} id="signUpForm">
                    <div className={'email' + modifiers}>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} /> {/* TODO класс инпута */}
                        {/* <span>{this.props.data.email__errorMessage}</span> // TODO класс ошибки */}
                    </div>
                    <div className={'password' + modifiers}>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        {/* <span>{this.props.data.password__errorMessage}</span> */}
                    </div>
                    <div className={'password-repeat' + modifiers}>
                        <input name="passwordRepeat" type="password"></input>
                        {/* <span>{this.props.data.passwordRepeat__errorMessage}</span> */}
                    </div>
                    <div className={'submit' + modifiers}>
                        <input type="submit" value="SignUp" />
                    </div>
                </form>
            </div>
        )
    }
}


