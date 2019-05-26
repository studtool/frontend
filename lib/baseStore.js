const Sux = require('./sux');

export default class BaseStore {
    constructor(state = {}) {
        this.initialState = {...state};
        this.state = {...state};
        this.handledActions = this.getHandledActions();
        Sux.storeInstances.push(this);
    }

    getState() {
        return this.state;
    }

    getInitialState() {
        return this.initialState;
    }

    static handle({action, payload = {}} = {}) {
        for (const store of Sux.storeInstances) {
            store._handle(action, payload);
        }
    }

    /**
     * @param {string} action - иницируемое событие
     * @param {object} payload - данные, переданные вместе с событием
     * Если был передан обработчик события, то к arguments необходимо добавить payload,
     * так как этот объект может использоваться в обработчике.
     * Чтобы избежать ошибок в передаче аргументов в обработчик события,
     * в сигнатуре обработчика нужно использовать деструкторизацию f({arg1, arg2} = {}) {}
     * Если обработчик события не был передан, то вызывается Bus.emit
     * с переданными аргументами
     */
    _handle(action, payload) {
        if (this.handledActions[action]) { // если стор обрабатывает переданный action
            if (this.handledActions[action].callback) { // если для обработки был задан колбэк
                this.handledActions[action].arguments =
                    this.handledActions[action].arguments ?
                        this.handledActions[action].arguments :
                        {}; // TODO КОСТЫЛЬ добавить проверку передан ли аргументс
                this.handledActions[action].arguments.payload = payload;
                this.handledActions[action].callback(
                    this.handledActions[action].arguments
                );
            } else { // если колбэка нет то просто емитим
                Sux.observer.emit(this.handledActions[action].arguments);
            }
        }
    }
}
