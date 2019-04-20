import React, { Suspense, lazy }  from 'react';

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: '', passwordRepeat: '', val:'', data: {}};
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
        console.log("event: ", event);
        this.props.handleEvent(event);
    }


    render(){
        const modifiers = this.props.modifiers ? this.props.modifiers : ''
        return (
            <div className={'signup' + modifiers}>
                <h1>{"SignUp"}</h1>
                <form onSubmit={this.handleSubmit} id="signUpForm">
                    <div className={'email' + modifiers}>
                        <h3>Email</h3>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} /> {/* TODO класс инпута */}
                        <span>{this.props.data.email__errorMessage}</span> {/* // TODO класс ошибки */}
                    </div>
                    <div className={'password' + modifiers}>
                        <h3>Пароль</h3>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        <span>{this.props.data.password__errorMessage}</span>
                    </div>
                    <div className={'password-repeat' + modifiers}>
                        <h3>Повторите пароль</h3>
                        <input name="passwordRepeat" type="password" value={this.state.passwordRepeat} onChange={this.handleChange}></input>
                        <span>{this.props.data.passwordRepeat__errorMessage}</span>
                    </div>
                    <div className={'submit' + modifiers}>
                        <input type="submit" value="SignUp" />
                    </div>
                </form>
            </div>
        )
    }
}
