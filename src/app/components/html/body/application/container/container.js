import React from 'react';

export default class Container extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={'container' + this.props.modifiers}>
                <h1>{"HI"}</h1>
                {this.props.children}
            </div>
        )
    }
}
