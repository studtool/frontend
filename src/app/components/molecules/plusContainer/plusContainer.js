import React, {Component} from 'react';
import {AddButton} from '../../atoms/addButton/addButton.js';

export class PlusContainer extends Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e){
        console.log("Click");
    }

    render() {
        const {
            qa = false,
            data = {},
            handleAdd = this.handleAdd,
            children = null,
        } = this.props;

        return (
            <div data-qa={qa ? 'plus-container' : void 0}>
                <AddButton handleClick={handleAdd}/>
                {children}
            </div>
        );
    };
}
