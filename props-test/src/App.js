import React, {Component} from 'react';
import ChildComponent from './components/ChildComponent.js';
import Store from './store.js';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
        this.onClickHandler = this.onClickHandler.bind(this);
        console.log('init state',this.state);
    }

    onClickHandler () {
        const newState = Store.getState();
        console.log('new state',newState);
        this.setState( () => {
            return { 
                flag: newState.flag
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponent handler={this.onClickHandler} data={this.state}/>
            </div>
        );
    }

}


export default App;