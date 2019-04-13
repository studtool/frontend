import Bus from 'Modules/Bus';
import { DISPATCHER } from 'App/common/coreMessageTypes';
import Protocol from 'App/common/protocol';

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
        
        Bus.emit(
            Protocol.encode(DISPATCHER, type), 
            data
        );
    }
}

export default new Dispatcher;
