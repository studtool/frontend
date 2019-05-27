import AuthModel from '../../../../models/authModel.js';
import ActionCreator from '../../../../../lib/actionCreator.js';
import Actions from '../../../actions/actions.js';

class SignInFormLogic {
    async signIn({payload, state} = {}) {
        try {
            const signInResult = await AuthModel.signIn(payload);
            ActionCreator.create({
                action: Actions.SUCCESS_SIGNIN,
                actionData: signInResult,
            });
        } catch (error) {
            if (error === 401) {
                state.signIn__errorMessage = 'Пользователь не найден';
            } else if (error instanceof TypeError) {
                state.signIn__errorMessage = 'Возникли проблемы с сетью';
            }
            ActionCreator.create({
                action: Actions.FAILED_SIGNIN,
            });
        }
    }
}

export default new SignInFormLogic;
