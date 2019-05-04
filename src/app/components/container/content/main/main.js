import React, {Suspense, lazy} from 'react';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const modifiers = this.props.modifiers ? this.props.modifiers : '';
        return (
            <div className={'main' + modifiers}>
                <h1>{'Main'}</h1>
                {this.props.children}
            </div>
        );
    }
}
