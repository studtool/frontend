import 'babel-polyfill';
import Sux from '../lib/sux.js';
import Bus from 'bus-graph';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

import Actions from './app/actions/actions.js';
import UserStore from './app/store/userStore/userStore.js';
import ActionCreator from '../lib/actionCreator.js';

Sux.setObserver(Bus);
const Main = lazy(() => import('./app/pages/main/main.js'));
const SignUpController = lazy(() => import('./app/pages/signUp/singUpController.js'));

ActionCreator.create({
	action: Actions.CHECK_AUTH,
});


const App = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/signup" component={SignUpController} />
			</Switch>
		</Suspense>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
