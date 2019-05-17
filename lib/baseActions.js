import ActionCreator from './actionCreator.js';
export default class BaseActions {
    constructor() {
        this.actions = this.allActions();
    }

    initActions() {
        ActionCreator.registerActions(this.actions);
    }
}
