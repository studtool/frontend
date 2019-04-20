import React, { Suspense, lazy }  from 'react';
const Head = lazy(() => import('./head/head'))
const Content = lazy(() => import('./content/content'))

export default class Container extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const modifiers = this.props.modifiers ? this.props.modifiers : ''
        return (
            <div className={'container' + modifiers}>
                <Suspense>
                    <Head></Head>
                    <Content></Content>
                </Suspense>
            </div>
        )
    }
}
