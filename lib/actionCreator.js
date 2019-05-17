import Postman from '../src/modules/postman.js';
import {NoActionNameError, NoActionBodyError} from './errors/actionErrors.js';

/**
 * Класс для создание пользовательских событий
 */
class ActionCreator {
    create({action, actionData} = {}) {
        let payload = {};
        if (!action) {
            /**
             * бросить error если не было передано имя action
             */
            throw new NoActionNameError;
        }
        if (this.actions[action].body) {
            if (actionData) {
                payload = this.actions[action].formatMethod ?
                    this.actions[action].formatMethod(this.actions[action].body, actionData) :
                    actionData;
                // TODO сделать проверку payload на соответствие body
            } else {
                /**
                 * бросить warning о том что с этим action должны быть переданы данные
                 * так как для этого action есть body.
                 * Но в метод create эти данные не были переданы.
                 */
                console.warn('This action has body, but no data was passed. ' +
                'Payload will be empty {} in this case');
            }
        } else {
            if (actionData) {
                /**
                 * бросить error о том что нельзя передавать данные
                 * вместе с action, не описав при это body для данных
                 * этого action
                 */
                throw new NoActionBodyError;
            }
        }
        Postman.emit({
            from: 'ActionCreator',
            event: 'DISPATCH',
            data: {
                payload,
                action,
            },
        });
    }

    registerActions(actions = {}) {
        this.actions = actions;
    }
}

export default new ActionCreator;
