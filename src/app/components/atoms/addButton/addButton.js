import React from 'react';

export function AddButton (props){
    const {
        qa = false,
        title = '',
        handleClick = null,
    } = props;
    return (
        <button onClick={handleClick}>
            +
        </button>
    );
}
