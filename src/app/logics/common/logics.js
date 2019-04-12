import { Bus } from "../../../modules/Bus";
import {DISPATCHER} from "../../common/coreMessageTypes";
import protocol from "../../common/protocol";

export default class Logics{
    // логика (или стор) может обрабатывать только один вид action
    constructor(type){
        // Логика подписывается на сообщение: ДИСПЕТЧЕР__ТИП_ЛОГИКИ (JSON)
        this.types = type;
        Bus.on(protocol.encode(DISPATCHER, this.type), this.handle)
    }

    handle(){
        // обработка данных 
    }
}
