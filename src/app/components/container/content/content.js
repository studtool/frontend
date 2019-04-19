import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy }  from 'react';
const Main = lazy(() => import('./main/main'))
const SignUpController = lazy(() => import('./signUp/singUpController.js'))

export default class Content extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const modifiers = this.props.modifiers ? this.props.modifiers : ''
        return (
            <div className={'content' + modifiers}>
                <h1>{"Content"}</h1>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/signup" component={SignUpController} />
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        )
    }
}
