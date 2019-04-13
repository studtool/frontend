export class Store{
    // логика (или стор) может обрабатывать только один вид action
    constructor(type){
        // Логика подписывается на сообщение: ДИСПЕТЧЕР__ТИП_ЛОГИКИ (JSON)
        this.type = type;
        this.states = {};
    }

    handle(){
        // обработка данных 
    }

    getState() {
        return this.states;
    }
}
