import UserStore from '../userStore/userStore.js';

class HeaderStoreLogic {
    buildInitialState() {
        const state = {
            isLogedIn: UserStore.state.isLogedIn,
        };
        return state;
    }

    setUserStatus({state} = {}) {
        state.isLogedIn = UserStore.state.isLogedIn;
    }
}

export default new HeaderStoreLogic;
