export class PasswordMatchError extends Error {
    constructor() {
        super()
        this.name = "PasswordMatchError";
        this.message = "Passwords dont match";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, PasswordMatchError);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}


export class EmailPatternError extends Error {
    constructor() {
        super();
        this.name = "EmailPatternError";
        this.message = "Incorrect email";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EmailPatternError);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}
