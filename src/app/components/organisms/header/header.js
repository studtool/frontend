import React, { Component }  from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={'header'}>
                <h1>{"Header"}</h1>
                {this.props.children}
            </div>
        )
    }
}
