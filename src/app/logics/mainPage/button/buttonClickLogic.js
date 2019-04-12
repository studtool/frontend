import {Logics} from "../../common/logics";
import { actions } from "../../../common/actionsTypes";

class ButtonClickLogic extends Logics{
    constructor(type){
        super(type); // типы событий, которые данный Store будет обрабатывать
        this.states = [];
        BUTTON_CLICK__STATES = { // мб в общие?
            ERROR: "BUTTON_CLICK__ERROR",
            OK: "BUTTON_CLICK__OK"
        };
        
    }

    handle(data = {}){

        if (!data.type == this.type)
            break;
    
        // здесь работа с логикой (пока что прувит мир)
        this.print(data);

        // ещё одна логика, которая меняет состояние элемента (заглушка, пример)
        this.stubStates();

        // вызов у контроллера изменений 
        // MainPageViewController.change(data, this.states);
    }

    format(element, status, data){
        return {
            element: element,
            status: status,
            data: data
        }
    }

    stubStates(){
        this.states.push(
            format("greeting", BUTTON_CLICK__STATES.OK, "Hello, World!")
        )
    }

    print(data){
        console.log("Printing data: ", data);
    }
}

export default new ButtonClickLogic(actions.helloWorldButtonClicked);
