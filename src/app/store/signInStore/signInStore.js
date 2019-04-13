import Bus from 'Modules/Bus.js'
import {Store} from "App/store/store.js";
import actions from 'App/common/actionTypes.js';
import { DISPATCHER } from 'App/common/coreMessageTypes';
import Protocol from 'App/common/protocol';

class SignInStore extends Store{
    constructor(){
        const action = actions();
        super(action.signInForm);
        this.states = {};
        this.handle = this.handle.bind(this);
        this.stubStates = this.stubStates.bind(this);
        this.getState = this.getState.bind(this);
        Bus.on(
            Protocol.encode(DISPATCHER, this.type), 
            this.handle
        );
    }

    handle(data = {}){

        // if (!data.type == this.type)
        //     break;
    
        // здесь работа с логикой (пока что прувит мир)
        this.print(data);

        // ещё одна логика, которая меняет состояние элемента (заглушка, пример)
        this.stubStates(data);

        // вызов у контроллера изменений 
        // MainPageViewController.change(data, this.states);
    }

    stubStates(data){
        if (data.data.email == "a@a.ru" && data.data.password == "1"){
            this.states = {answ : "ok"}
        } else {
            this.states = {answ : "err"}
        }
        
    }

    print(data){
        console.log("Printing data: ", data);
    }

    getState() {
        return this.states;
    }
}

export default new SignInStore;
