import { Bus } from "../../modules/Bus";
import { ACTION_CREATOR__DISPATCHER } from "../common/coreMessageTypes";
import { MainPageStore } from "../stores/mainPageStore/mainPageStore";

// много импортов

class Dispatcher {
    constructor(){
        this.stores = [MainPageStore];  
        Bus.on(ACTION_CREATOR__DISPATCHER, send) 
    }

    send(data = {}){ // TODO ассинхронно
        this.stores.forEach((store) => {
            store.handle(data);
        });
    }
}

export default new Dispatcher;
