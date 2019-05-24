import BaseActions from '../../../lib/baseActions.js';
import {userSignUpBody, userSignInBody, successSignInBody} from './actionsBody.js';
import format from './actionsFormatMethods.js';


class Actions extends BaseActions {
    constructor() {
        super();
    }
    // TODO придумать как раззделить события что все не было в одном объекте
    allActions() {
        return {
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
            'SUCCESS_SIGNIN': { // TODO добавить форматный метод
                body: successSignInBody,
            },
            'SUCCESS_SIGNUP': {},
            'INCORRECT_USER_INPUT_SIGNUP': {},
            'USER_SIGNOUT': {},
            'CHECK_AUTH': {},
        };
    }
}

export default new Actions;
