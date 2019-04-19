import Postman from 'Modules/postman';
import {sux} from 'App/actionCreator/coreMessageTypes';
import SignUpStore from 'App/store/formStores/signUpStore/signUpStore.js';

class Dispatcher {
    /* 
    * Dispatcher – ещё раз форматирует запрос, добавляя тип события через протокол (для store) 
    * и отправляет в store
    */

    format(data = {}, type = ""){
        return {
            type: type,
            data: data
        }
    }

    exec(data = {}, type = ""){
        data = this.format(data, type);
        console.log("data: ", data, type);
        
        Postman.emit(
            sux.Dispatcher, 
            type, 
            data
        );
    }

    dispatch(action, payload) {
        SignUpStore.handle(action, payload);
    }
    
}

export default new Dispatcher;
