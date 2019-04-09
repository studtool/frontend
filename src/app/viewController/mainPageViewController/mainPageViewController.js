import ViewController from "../common/viewController";

class MainPageViewController extends ViewController{
    constructor(view){
        super(view)
    }

    change(states){
        /* 
            финальная обработка данных пришедших из Store
                states – состояния определенных элементов и их новые данные 
        */ 

        // и отправка данных во вьюху
        this.view.setStates(states)
    }
}

export default new MainPageViewController()