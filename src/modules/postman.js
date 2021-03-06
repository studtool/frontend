import Protocol from './protocol';

export class Postman {
    /**
     * Postman – почтальон
     * Расширение Bus на наличие отправителя и получателя
     * TODO логирование сообщение и удобная отладка
    */
    constructor() {
        this._listeners = {};
    }

    /**
     * отладочная функция для получение всех читателей
     * @return {object}
    */
    getAllListeners() {
        return this._listeners;
    }

    /**
     * Encode – кодирует тип сообщения
     * Использует Protocol
     * @param {String} from – отправитель сообщения
     * @param {String} event – получатель сообщения
     * @return {String} тип сообщения (JSON_string)
    */
    encode(from, event) {
        return Protocol.encode(from, event);
    }

    /**
     * От кого сообщение
     * @param {sting} adress - путь откуда-куда (JSON_string)
     * @return {object}
     */
    from(adress) {
        return Protocol.from(adress);
    }

    /**
     * Кому адресовано сообщение
     * @param {sting} adress - путь откуда-куда (JSON_string)
     * @return {object}
     */
    event(adress) {
        return Protocol.event(adress);
    }

    on(from, event, callback) {
        const e = this.encode(from, event);
        if (!this._listeners[e]) {
            this._listeners[e] = [];
        }
        this._listeners[e].push({callback});
    }

    off(from, event, callback) {
        const e = this.encode(from, event);

        this._listeners[e] = this._listeners[e].filter((listener) => {
            return listener.callback !== callback;
        });
    }

    totalOff(from, event) {
        const e = this.encode(from, event);

        this._listeners[e] = [];
    }

    emit({from, event, data} = {}) {
        const e = this.encode(from, event);
        this._listeners[e].forEach((listener) => {
            listener.callback(data);
        });
    }
}


export default new Postman();
