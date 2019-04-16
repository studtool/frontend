import React, {Component} from 'react';
import RegistratrionForm from './RegistratrionForm.js';
import ActionCreator from '../ActionCreator/actionCreator.js';
import RegistrationFormStore from '../Stores/FormStores/RegistrationFormStore/RegistrationFormStore.js';
import Bus from '../Bus.js';

class Controller extends Component {
    constructor() {
        super();
        this.state = RegistrationFormStore.getState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        Bus.on("REGISTRATION_INPUT", ActionCreator.create);
        Bus.on("REGISTRATION_INPUT_change_state", this.onChange);
    }

    handleSubmit(event) {
        event.preventDefault();
        const rawData = {
            actionName: "REGISTRATION_INPUT",
            data: Array.from(event.target.elements)
        }       
        Bus.emit("REGISTRATION_INPUT", rawData);
    }

    onChange(newState) {
        console.log(newState);
        this.setState( () => {
            return newState;
        })
    }

    render() {
        return (
            <div>
                <h1>Registration Page</h1>
                <RegistratrionForm handleSubmit={this.handleSubmit} data={this.state}/>
            </div>
        );
    }
    
}

export default Controller;