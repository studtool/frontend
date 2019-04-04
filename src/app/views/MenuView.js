import BaseView from './BaseView.js';
import Bus from '../../modules/Bus.js';
import NavigationController from '../controllers/NavigationController.js';

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



export default class MenuView extends BaseView {
	constructor () {
		super(menu);
		this._navigationController = new NavigationController();
		// Bus.on('done-get-user', this.render.bind(this));
	}

	show () {
		// Bus.emit('get-user');
		super.show();
        this.registerActions();
        const name = 'Иван-Царевич';
        const element = '<h1>Здравствуй, {'+name+'}!</h1>';

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
}
