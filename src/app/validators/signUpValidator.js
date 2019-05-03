import {PasswordMatchError, EmailPatternError} from '../Errors/inputValidationErrors.js';

class SignUpValidator {
    constructor() {
        this.allValidations = [
            this.passwordMatch.bind(this),
            this.emailPattern.bind(this)
        ];
    }

    passwordMatch(data) {
        if (data.password !== data.passwordRepeat) {
            throw new PasswordMatchError;
        }
    }

    emailPattern(data) {
        if (!(data.email.includes("@"))) {
            throw new EmailPatternError;
        }
    }
}

export default new SignUpValidator;
