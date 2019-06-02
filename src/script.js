import 'babel-polyfill';
import Sux from '../lib/sux.js';
import Bus from 'bus-graph';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

import Actions from './app/actions/actions.js';
import ActionCreator from '../lib/actionCreator.js';

Sux.setObserver(Bus);
const Main = lazy(() => import('./app/pages/main/main.js'));
const SignUp = lazy(() => import('./app/pages/signUp/signUp.js'));
const SignIn = lazy(() => import('./app/pages/signIn/signIn.js'));

ActionCreator.create({
	action: Actions.CHECK_AUTH,
});

const App = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/signin" component={SignIn} />
			</Switch>
		</Suspense>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
