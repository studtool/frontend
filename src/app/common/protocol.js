export class Protocol{

    /**
     * Encode – кодирует тип сообщения
     * @param {String} from – отправитель сообщения
     * @param {String} to – получатель сообщения
     * @return {String} тип сообщения (JSON_string) 
    */
    encode(from, to){ 
        return JSON.stringify({
                from : from,
                to: to
            })
    }

    from(message){
        return JSON.parse(message).from
    }

    to(message){
        return JSON.parse(message).to
    }
}

export default new Protocol();
