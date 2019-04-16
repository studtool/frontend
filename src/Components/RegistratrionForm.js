import React, {Component} from 'react';
// import Bus from '../src/Bus.js';

class RegistratrionForm extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        const form = document.getElementById('regForm');
        console.log(form);
        console.log(this.props.handleSubmit);
        form.addEventListener("submit", this.props.handleSubmit);   
    }

    render() {
        return (
            <div>
                <form id="regForm">
                    <div>
                        <input name="email" type="email"></input>
                        <span>{this.props.data.email__errorMessage}</span>                        
                    </div>
                    <div>
                        <input name="password" type="password"></input>
                        <span>{this.props.data.password__errorMessage}</span>
                    </div>
                    <div>
                        <input name="passwordRepeat" type="password"></input>
                        <span>{this.props.data.passwordRepeat__errorMessage}</span>
                    </div>
                    <input name="submit" type="submit"></input>
                </form>
            </div>
        );
    }

}

export default RegistratrionForm;


// Bus.emit('change-general-state', this.props.data)

    // div
    //     form(id= id)
    //         for field in fields
    //             div
    //                 input(name= field.name, type= field.type, placeholder= field.placeholder, id= field.id)
    //                 span(hidden, id= field.errorId)
    //         input(name="submit", type="submit")
    // div
    //     span(hidden id= actionError)= actionErrorMessage