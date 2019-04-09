import View from './common/view';
import NavigationController from '../controllers/NavigationController.js';
import {ActionCreator} from '../actions/actionCreator';

import ReactDOM from 'react-dom';


const menu = require('../../blocks/templates/menu.pug');

const mainMenu = [
	{
		label: '💣 Мультиплеер',
		href: '/multiplayerMenu'
	},
	{
		label: '💣 Одиночная игра',
		href: '/single'
	}
];



export default class MenuView extends View {
	constructor () {
		super(menu);
		this._navigationController = new NavigationController();
		// Bus.on('done-get-user', this.render.bind(this));
	}

	show () {
		// Bus.emit('get-user');
		// TODO добавить кнопку по которой будет вызываться ActionCreator.exec({MAIN_PAGE__CLICK, null, null})
		super.show();
        this.registerActions();
        const name = 'Button';
        const element = '<button>name</button>';

        ReactDOM.render(
        element,
        document.getElementById('root')
        );
	}

	render (user) {
		if (user.is_authenticated) {
			super.render({ mainMenu: mainMenu});
		} else {
			super.render({ mainMenu: mainMenu});
		}
		// Bus.off('done-get-user', this.render.bind(this));
	}

	registerActions () {
		this.viewDiv.addEventListener('click', this._navigationController.keyPressedCallback);
	}

	setStates(states){
        const element = '<h1>Здравствуй, {'+ states[0].data +'}!</h1>';

        ReactDOM.render(
        element,
        document.getElementById('root')
        );
	}
}
