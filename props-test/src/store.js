class Store {
    constructor() {
        this.obj = {
            flag: 0
        };
    }

    changeState() {
        setTimeout( ()=>{
            this.obj.flag = this.obj.flag ? 0 : 1;            
        }, 1000);
        this.obj.flag = this.obj.flag ? 0 : 1;
    }

    getState() {
        return this.obj;
    }
}

export default new Store;