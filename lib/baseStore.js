import Postman from '../src/modules/postman.js';
export default class BaseStore {
    constructor(state) {
        this.state = {...state};
        Postman.on('ActionCreator', 'DISPATCH', this.handle.bind(this));
        this.handledActions = this.getHandledActions();
    }

    getState() {
        return this.state;
    }

    /**
     * @param {string} action - иницируемое событие
     * @param {object} payload - данные, переданные вместе с событием
     * Если был передан обработчик события, то к arguments необходимо добавить payload,
     * так как этот объект может использоваться в обработчике.
     * Чтобы избежать ошибок в передаче аргументов в обработчик события,
     * в сигнатуре обработчика нужно использовать деструкторизацию f({arg1, arg2} = {}) {}
     * Если обработчик события не был передан, то вызывается Postman.emit
     * с переданными аргументами
     */
    handle({action, payload = {}} = {}) {
        if (this.handledActions[action]) { // если стор обрабатывает переданный action
            if (this.handledActions[action].callback) { // если для обработки был задан колбэк
                this.handledActions[action].arguments.payload = payload;
                this.handledActions[action].callback(
                    this.handledActions[action].arguments
                );
            } else { // если колбэка нет то просто емитим
                Postman.emit(this.handledActions[action].arguments);
            }
        }
    }
}
