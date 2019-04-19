import React, {Component} from 'react';
import ActionCreator from 'App/actionCreator/actionCreator.js';
import Postman from 'Modules/postman';

class Controller extends Component {
    /**
     * 
     * @param {*} aimComponent – Компонента, к которой создается контроллер
     * @param {*} aimStore – Стор, откуда будет подпись на события
     * @param {*} fromMessage – откуда почтальон (Postman) будет слушать сообщения
     * @param {*} eventMessage – тип сообщения, которое будет слушать Postman
     */
    constructor(aimComponent, aimStore, fromMessage, eventMessage) {
        super();
        this.state = aimStore.getState();
        this.handleEvent = this.handleEvent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.component = aimComponent;
        this.fromMessage = fromMessage;
        this.eventMessage = eventMessage
        Postman.on(this.fromMessage, this.eventMessage, ActionCreator.create);
        Postman.on(this.fromMessage, this.eventMessage + "_change_state", this.onChange);
    }

    /**
     * handleEvent – Обработка какого-либо события
     * @param {*} event – событие, которое необходимо обработать
     */
    handleEvent(event) {
        event.preventDefault();
        console.log("handling event: ", event);
        console.log("eventMessage: ", this.eventMessage);
        // предобраюотка данных перед отправкой в ActionCreator
        const rawData = {
            actionName: this.eventMessage,
            data: Array.from(event.target.elements)
        }       
        Postman.emit(this.fromMessage, this.eventMessage, rawData);
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
                <this.component handleEvent={this.handleEvent} data={this.state}/>
            </div>
        );
    }
    
}

export default Controller;