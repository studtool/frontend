import Controller from 'App/components/controller.js';
import SignUp from './signUp.js';
import SignUpStore from 'App/store/formStores/signUpStore/signUpStore.js';
import {sux} from 'App/actionCreator/coreMessageTypes.js'

export default class SignUpController extends Controller{
    constructor (){
        super(SignUp, SignUpStore, sux.SignUpStore, "SIGNUP_INPUT"); // переделать SIGNUP_INPUT на импорт
    }
}
