import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ActionCreator from '../../../../../lib/actionCreator.js';
import Actions from '../../../actions/actions.js';

import HeaderStore from '../../../store/headerStore/headerStore.js';
export default class Header extends Component {
    constructor() {
        super();
        this.state = HeaderStore.getState();
        HeaderStore.subscribeToRecieveState(this);
        this.onSignOut = this.onSignOut.bind(this);
    }

    componentWillUnmount() {
        HeaderStore.unsubscribe(this);
    }

    onSignOut() {
        ActionCreator.create({
            action: Actions.USER_SIGNOUT,
        });
    }

    createButtonBar() {
        if (this.state.isLogedIn) {
            return (
                <div>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <button onClick={this.onSignOut}>Sign Out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={'header'}>
                <h1>Header</h1>
                {this.createButtonBar()}
            </div>
        );
    }
}
