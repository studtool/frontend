import signUpInputBody from './actionTypesBody.js';
import signUpInputFormatMethod from './actionFormatMethods.js';
const Types = {
    "SIGNUP_INPUT": {
        body: signUpInputBody,
        formatMethod: signUpInputFormatMethod
    }
};

// перечисление типов
export const typesEnum = {}

// заполнение типов
function _getTypes(){
    for (const key in Types) {
        typesEnum[key] = key;
    }
}

_getTypes();

export default Types;
