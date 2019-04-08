import Bus from '../../modules/Bus';

class ActionCreator {

    constructor(){
        this.actions = {
            'user_login': [],
        };

        this._SEND_TO_DISPATCHER = "SEND_TO_DISPATCHER";
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
        
        Bus.emit(this._SEND_TO_DISPATCHER, data);
    }
}

export default new ActionCreator;
