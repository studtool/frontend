import {userSignUpBody, userSignInBody} from './actionTypesBody.js';
import format from './actionFormatMethods.js';
const Types = {
    'USER_SIGNUP': {
        body: userSignUpBody,
        formatMethod: format,
    },

    'USER_SIGNIN': {
        body: userSignInBody,
        formatMethod: format,
    },

    'FAILED_SIGNUP': {},

    'FAILED_SIGNIN': {},

    'SUCCESS_SIGNIN': {},

    'SUCCESS_SIGNUP': {},

    'INCORRECT_USER_INPUT_SIGNUP': {},
};

// перечисление типов
export const typesEnum = {};

/**
 * Никита, напиши для его это нужно пожалуйста
 */
function _getTypes() {
    for (const key in Types) {
        typesEnum[key] = key;
    }
}

_getTypes();

export default Types;
