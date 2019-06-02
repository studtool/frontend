import React, {Component} from 'react';
import {FileSystemElement} from '../../atoms/fileSystemElement/fileSystemElement.js';

export class FileSystemContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        if (e.keyCode == 13){
            e.preventDefault();
            console.log(e.nativeEvent.srcElement.innerText);
        }
    }

    render() {
        const {
            qa = false,
            data = {},
            children = null,
            handleSubmit = this.handleSubmit,
        } = this.props;

        return (
            <div data-qa={qa ? 'file-system-container' : void 0}>
                <FileSystemElement handleSubmit={handleSubmit}>
                    {children}
                </FileSystemElement>
            </div>
        );
    };
}
