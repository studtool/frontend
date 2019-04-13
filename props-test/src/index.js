import React from 'react';
import ReactDOM from 'react-dom';

import Bus from './Bus.js';
import App from './App.js';
import Store from './store.js';


Bus.on('change-general-state', () => {Store.changeState();});

ReactDOM.render(<App/>, document.getElementById('root'));