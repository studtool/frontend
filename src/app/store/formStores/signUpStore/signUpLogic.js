import SignUpValidator from 'App/validators/signUpValidator.js';
import AuthModel from 'App/validators/signUpValidator';

class SignUpLogic {

    execLogic(payload) {
        let newState = {};
        newState = this.validate(payload);
        if (newState.flag) {
            // makerequest();
        }

        return newState.state;
    }


    validate(payload) {
        let flag = 1;
        let validationResult = {}; 
        validationResult.state = SignUpValidator.allValidations.reduce( (acc, validation) => {
            let res = validation(payload);
            if (!res.status) {
                flag = 0;
            }

            for (let key in res) {
                if ( key != "status") {
                    acc[key] = res[key]
                }
            }

            return acc;
        }, {});
        validationResult.flag = flag;
        return validationResult;
    }

    makeRequest() {

    }
}

export default new SignUpLogic;