import React, {Component} from 'react';
import Header from '../../components/organisms/header/header';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header></Header>
                <div className={'main'}>
                    <h1>{'Main'}</h1>
                    {this.props.children}
                </div>
            </>
        );
    }
}
