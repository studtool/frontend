class SignUpValidator {
    constructor() {
        this.allValidations = [
            this.passwordMatch.bind(this),
            this.emailPattern.bind(this)
        ];
    }

    passwordMatch(data) {
        const res = {};
        if (data.password !== data.passwordRepeat) {
            res.password__errorMessage = "пароли не совпадают";
            res.passwordRepeat__errorMessage = "пароли не совпадают";
            res.wasError = 1;
        } else {
            res.password__errorMessage = "";
            res.passwordRepeat__errorMessage = "";
            res.wasError = 0;
        }
        return res
    }

    emailPattern(data) {
        const res = {};
        if (!(data.email.includes("@"))) {
            res.email__errorMessage = "неверный email";
            res.wasError = 1;
        } else {
            res.email__errorMessage = "";
            res.wasError = 0;
        }
        return res
    }
}


export default new SignUpValidator;
