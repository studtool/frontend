// много импортов

class Dispatcher {
    constructor(){
        this.stores = [];
    }

    send(data = {}){
        this.stores.forEach((store) => {
            store.method(data); // TODO
        });
    }
}
