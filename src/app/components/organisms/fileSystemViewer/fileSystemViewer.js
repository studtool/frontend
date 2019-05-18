import React, {Component} from 'react';
import {Button} from '../../atoms/button/button.js';
import {InputText} from '../../molecules/inputText/inputText.js';

export class FileSystemViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            qa = false,
            data = {},
            handleSubmit = null,
        } = this.props;

        return (
            <>
                lol
            </>
        );
    };
}
