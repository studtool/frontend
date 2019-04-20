export class Store{
    constructor(){ // type
        // this.type = type;
        this.states = {};
    }

    handle(action, payload){
        // обработка данных 
    }

    getState() {
        return this.states;
    }

    updateState(newState) {
        for (let key in newState) {
            this.state[key] = newState[key];
        }
    }
}
