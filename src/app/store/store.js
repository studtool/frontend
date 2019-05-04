export class Store {
    constructor() { // type
        this.states = {};
    }

    handle(action, payload) {
        // обработка данных
    }

    getState() {
        return this.states;
    }

    updateState(newState) {
        for (const key in newState) {
            this.state[key] = newState[key];
        }
    }
}
