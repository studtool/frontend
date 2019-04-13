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

    /**
     * 
     * @param {sting} adress - путь откуда-куда (JSON_string) 
     */
    from(adress){
        return JSON.parse(adress).from
    }

    /**
     * 
     * @param {sting} adress - путь откуда-куда (JSON_string) 
     */
    to(adress){
        return JSON.parse(adress).to
    }
}

export default new Protocol();
