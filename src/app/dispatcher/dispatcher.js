import Bus from '../../modules/Bus';
import { DISPATCHER } from '../common/coreMessageTypes';
import {actionStates} from '../common/statesTypes';
import Protocol from '../common/protocol';

class Dispatcher {
    /* 
    * Dispatcher – ещё раз форматирует запрос, добавляя тип события через протокол (для store) 
    * и отправляет в store
    */

    format(data = {}, type = "", state = actionStates.loading){
        return {
            type: type,
            data: data,
            state: state
        }
    }

    exec(data = {}, type = "", state = actionStates.loading){
        data = this.format(data, type, state);
        console.log("data: ", data);
        
        Bus.emit(
            Protocol.encode(DISPATCHER, type), 
            data
        );
    }
}

export default new Dispatcher();
