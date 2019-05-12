import Types from './actionTypes.js';
import Postman from '../../modules/postman.js';

import {NoActionNameError, NoActionBodyError} from '../errors/actionErrors.js';

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
        if (Types[action].body) {
            if (actionData) {
                payload = Types[action].formatMethod(Types[action].body, actionData);
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
}

export default new ActionCreator;
