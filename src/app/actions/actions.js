import {userSignUpBody, userSignInBody, successSignInBody} from './actionsBody.js';
import format from './actionsFormatMethods.js';

const Actions = {
    'USER_SIGNUP': {
        name: 'USER_SIGNUP',
        body: userSignUpBody,
        formatMethod: format,
    },
    'USER_SIGNIN': {
        name: 'USER_SIGNIN',
        body: userSignInBody,
        formatMethod: format,
    },
    'FAILED_SIGNUP': {
        name: 'FAILED_SIGNUP',
    },
    'FAILED_SIGNIN': {
        name: 'FAILED_SIGNIN',
    },
    'SUCCESS_SIGNIN': { // TODO добавить форматный метод
        name: 'SUCCESS_SIGNIN',
        body: successSignInBody,
    },
    'SUCCESS_SIGNUP': {
        name: 'SUCCESS_SIGNUP',
    },
    'INCORRECT_USER_INPUT_SIGNUP': {
        name: 'INCORRECT_USER_INPUT_SIGNUP',
    },
    'USER_SIGNOUT': {
        name: 'USER_SIGNOUT',
    },
    'SUCCESS_SIGNOUT': {
        name: 'SUCCESS_SIGNOUT',
    },
    'CHECK_AUTH': {
        name: 'CHECK_AUTH',
    },
};

export default Actions;
