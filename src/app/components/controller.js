import React, {Component} from 'react';
import ActionCreator from 'App/actionCreator/actionCreator.js';

class Controller extends Component {
    /**
     * 
     * @param {*} aimComponent – Компонента, к которой создается контроллер
     * @param {*} aimStore – Стор, откуда будет подпись на события
     * @param {*} fromMessage – откуда почтальон (Postman) будет слушать сообщения
     * @param {*} eventMessage – тип сообщения, которое будет слушать Postman
     */
    constructor(aimComponent, aimStore, handlers) {
        super();
        this.component = aimComponent;
        this.state = aimStore.getState();
        this.handlers = handlers;

        this.handleEvent = this.handleEvent.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    /**
     *  handleEvent – Предобработка и отправка в AC 
     * @param {*} actionName – название action, на которое далее будет реакция
     * @param {*} data – данные
     */
    handleEvent(actionName, data) {
        debugger;
        // event.preventDefault();
        console.log("actionName: ", actionName , "data: ", data);
        // предобработка данных перед отправкой в ActionCreator
        const rawData = {
            actionName: actionName,
            data: data
        }       
        ActionCreator.create(rawData)
    }

    // 1. после некорретных данный все равно переходит далее в стор
    // 2. контроллер компоненты просирает контекст и делает это после перехода управления в стор
    onChange(newState) {
        console.log("new state: ", newState);
        this.setState( () => {
            return newState;
        })
        console.log("Applied state: ", this.state);
    }

    render() {
        return (
            <>
                <this.component handlers={this.handlers} data={this.state}/>
            </>
        );
    }
    
}

export default Controller;