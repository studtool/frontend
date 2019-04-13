import React, {Component} from 'react';
import Bus from '../Bus.js';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        console.log('in child',props);
    }

    handleClick(e) {
        Bus.emit('change-general-state', this.props.data);
        this.props.handler();  
    }

    render() {
        console.log(this.props.data.flag);
        return (
            <div>
                <button onClick={this.handleClick}>click me</button>
                <span>{this.props.data.flag ? 'HI' : 'BYE'}</span>
            </div>
        );
    }

}

export default ChildComponent;


// Bus.emit('change-general-state', this.props.data)