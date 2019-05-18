import React, {Component} from 'react';

export function FileSystemElement (props){
    const {
        qa = false,
        title = '',
        handleSubmit = null,
    } = props;
    return (
        <div contentEditable={true} onKeyDown={handleSubmit}>
            {props.children}
        </div>
    );
}
