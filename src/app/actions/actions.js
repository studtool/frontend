import BaseActions from '../../../lib/baseActions.js';
import {userSignUpBody, userSignInBody} from './actionsBody.js';
import format from './actionsFormatMethods.js';


class Actions extends BaseActions {
    constructor() {
        super();
    }

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
            'SUCCESS_SIGNIN': {},
            'SUCCESS_SIGNUP': {},
            'INCORRECT_USER_INPUT_SIGNUP': {},
        };
    }
}

export default new Actions;
