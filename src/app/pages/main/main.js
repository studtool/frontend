import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/organisms/header/header';

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Header></Header>
                <div className={'main'}>
                    <h1>{'Main'}</h1>
                </div>
                <Link to='/signup'>
                    <button>Sign up</button>
                </Link>
                <Link to='/signin'>
                    <button>Sign in</button>
                </Link>
            </>
        );
    }
}
