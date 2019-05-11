import Postman from 'Modules/postman';
import {Store} from 'App/store/store';
import SignUpLogic from './signUpFormLogic';
import {sux} from 'App/actionCreator/coreMessageTypes.js';

class UserStore extends Store {

    constructor() {
        super();
    }

}


export default new UserStore;
