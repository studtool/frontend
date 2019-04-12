import 'babel-polyfill';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

const Container = lazy(() => import('Container/container'))

const App = () => (
	<Router>
	  <Suspense fallback={<div>Loading...</div>}>
		<Switch>
		  <Route exact path="/" component={Container}/>
		</Switch>
	  </Suspense>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
