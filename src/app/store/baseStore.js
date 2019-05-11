import Postman from '../../modules/postman.js';

export class BaseStore {
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
    handle(action, payload) {
        if (this.handledActions[action].callback) {
            this.handledActions[action].arguments.payload = payload;
            this.handledActions[action].callback(
                this.handledActions[action].arguments
            );
        } else {
            Postman.emit(this.handledActions[action].arguments);
        }
    }
}
