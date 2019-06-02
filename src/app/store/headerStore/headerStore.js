import BaseStore from '../../../../lib/baseStore.js';
import HeaderStoreLogic from './headerStoreLogic';

class HeaderStore extends BaseStore {
    constructor() {
        super(HeaderStoreLogic.buildInitialState());
    }

    getHandledActions() {
        return {
            'SUCCESS_SIGNIN': {
                callback: (args) => {
                    HeaderStoreLogic.setUserStatus(args);
                },
                arguments: {
                    state: this.state,
                },
            },
            'SUCCESS_SIGNOUT': {
                callback: (args) => {
                    HeaderStoreLogic.setUserStatus(args);
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },
        };
    }
}


export default new HeaderStore;
