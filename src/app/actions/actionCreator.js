import Bus from '../../modules/Bus';
import { ACTION_CREATOR__DISPATCHER } from "../common/coreMessageTypes";
import { actions } from "./actions";

class ActionCreator {

    constructor(actions){
        this.actions = actions;
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
        
        Bus.emit(ACTION_CREATOR__DISPATCHER, data);
    }
}

export default new ActionCreator(actions);
