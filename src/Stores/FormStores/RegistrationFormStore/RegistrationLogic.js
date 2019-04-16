import RegistrationValidator from '../../../Validators/RegistrationValidator.js';

class RegistrationLogic {

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
        validationResult.state = RegistrationValidator.allValidations.reduce( (acc, validation) => {
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

export default new RegistrationLogic;