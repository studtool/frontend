import React from 'react';
import {EditorForm} from '../../components/organisms/editorForm/editorForm';


export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditorForm
                handleSubmit={this.props.handleSubmit}
                data={this.props.data}
            />
        );
    }
}
