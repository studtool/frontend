import Types from './actionTypes.js';
import Dispatcher from 'App/dispatcher/dispatcher.js';
/**
 * Класс для создание пользовательских событий
 */
class ActionCreator {
    /**
     * Метод для создания событий
     * @param {object} actionEntity - объект вида
     * {actionName: 'ACTION', data:data}
     */
    create(actionEntity) {
        if (Types[actionEntity.actionName].body) {
            const action = actionEntity.actionName;
            const payload = Types[action].formatMethod(Types[action].body, actionEntity.data);
            Dispatcher.dispatch(actionEntity.actionName, payload);
        } else {
            Dispatcher.dispatch(actionEntity.actionName, {});
        }
    }
}

export default new ActionCreator;
