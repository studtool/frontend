import 'babel-polyfill';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

const Container = lazy(() => import('Container/container'))

const App = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route path="/" component={Container}/>
				{/* к сожалению, тут надо дублировать пути, костыляки */}
				<Route exact path="/signup" component={Container}/>
			</Switch>
		</Suspense>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

/*
TODO 
x 1. встроить в bus протокол => postman

перенести protocol в modules, а actionTypes + core в actionCreator

x 2. переписать всё на bus с протоколом
x 3. доделать соединение модулей
4. добавить models
5. сделать запрос на бек
*/
