import Types from './actionTypes.js';
import Dispatcher from 'App/dispatcher/dispatcher.js';

class ActionCreator {
    create(actionEntity) {
        if (Types[actionEntity.actionName].body) {
            const payload = Types[actionEntity.actionName].formatMethod(Types[actionEntity.actionName].body, actionEntity.data);
            Dispatcher.dispatch(actionEntity.actionName, payload);
        } else {
            Dispatcher.dispatch(actionEntity.actionName, {});   
        }
    }
}

export default new ActionCreator;
