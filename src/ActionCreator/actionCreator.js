import Types from './actionTypes.js';
import Dispatcher from '../Dispatcher/dispatcher.js';

class ActionCreator {
    create(actionEntity) {
        const payload = Types[actionEntity.actionName].formatMethod(Types[actionEntity.actionName].body, actionEntity.data);
        Dispatcher.dispatch(actionEntity.actionName, payload);
    }
}

export default new ActionCreator;