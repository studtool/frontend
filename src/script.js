import 'babel-polyfill';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

const Main = lazy(() => import('./app/pages/main/main.js'));
const SignUpController = lazy(() => import('./app/pages/signUp/singUpController.js'));
const EditorController = lazy(() => import('./app/pages/editor/editorController.js'));

const App = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/signup" component={SignUpController} />
				<Route exact path="/editor" component={EditorController} />
			</Switch>
		</Suspense>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
