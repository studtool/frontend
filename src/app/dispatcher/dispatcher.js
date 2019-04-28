import Postman from 'Modules/postman';
import {sux} from 'App/actionCreator/coreMessageTypes';
import SignUpFormStore from 'App/store/formStores/signUpFormStore/signUpFormStore.js';

class Dispatcher {
    /* 
    * Dispatcher – ещё раз форматирует запрос, добавляя тип события через протокол (для store) 
    * и отправляет в store
    */

    // format(data = {}, type = ""){
    //     return {
    //         type: type,
    //         data: data
    //     }
    // }

    // exec(data = {}, type = ""){
    //     data = this.format(data, type);
    //     console.log("data: ", data, type);
        
    //     Postman.emit(
    //         sux.Dispatcher, 
    //         type, 
    //         data
    //     );
    // }


    // TODO написать userStore в котором хранить залогинен ли пользователь и всю подобную инфу о нем
    dispatch(action, payload = {}) {
        SignUpFormStore.handle(action, payload);
    }
    
}

export default new Dispatcher;
