import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={'header'}>
                <h1>{'Header'}</h1>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
        );
    }
}
