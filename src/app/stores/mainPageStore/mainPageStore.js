import {Store, states} from "../common/store";
import {MAIN_PAGE__CLICK} from "../../common/userMessageTypes";
import {MainPageViewController} from "../../viewController/mainPageViewController"

class MainPageStore extends Store{
    constructor(types){
        super(types); // типы событий, которые данный Store будет обрабатывать
        this.states = [];
    }

    handle(data = {}){
        switch (data.type) {
            case this.types.MAIN_PAGE__CLICK:
                // здесь работа с логикой (пока что прувит мир)
                this.print(data);

                // ещё одна логика, которая меняет состояние элемента (заглушка, пример)
                stubStates();

                // вызов у контроллера изменений 
                MainPageViewController.change(data, this.states);
                break;
        
            default:
                break;
        }
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
            format("greeting", states.MAIN_PAGE__CLICK.OK, "Hello, World!")
        )
    }

    print(data){
        console.log("Printing data: ", data);
    }
}

export default new MainPageStore(
        {
            MAIN_PAGE__CLICK,
            // еще один тип сообщений для обработки
        }
    );
