import React, {Suspense, lazy} from 'react';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const modifiers = this.props.modifiers ? this.props.modifiers : '';
        return (
            <div className={'head' + modifiers}>
                <h1>{'Header'}</h1>
                {this.props.children}
            </div>
        );
    }
}
