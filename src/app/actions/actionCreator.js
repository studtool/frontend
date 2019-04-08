import Bus from '../../modules/Bus';

function lol(data){
    console.log("lol: ", data);
    return 0;
}

function kek(data){
    console.log("kek: ", data);
    return 1;
}

class ActionCreator {

    constructor(){
        this.actions = {
            'user_login': [lol, kek],
        };

        const SEND_TO_DISPATCHER = "SEND_TO_DISPATCHER";
    }

    format(data){
        return {
            type: data.type,
            data: data.data,
            errors: data.errors.result
        }
    }

    exec(data = {}){
        data.errors = this.actions[data.type]
            .reduce((acc, validate) => {
                acc.result.push(validate(data.data));
                return acc;
            }, 
            {result: []}
        );

        data = this.format(data);

        console.log("data: ", data);
        
        Bus.emit(SEND_TO_DISPATCHER, data);
    }
}

export default new ActionCreator;
