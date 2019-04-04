import 'babel-polyfill';

import Router from './modules/Router.js';
import Bus from './modules/Bus.js';


import MenuView from './app/views/MenuView.js';


function main () {
	[['/', MenuView],
		// ['/signup', SignupView],
		// ['/signin', SigninView],
		// ['/profile', ProfileView],
		// ['/change', ChangeView],
		// ['/single', SingleGameView],
		// ['/multiplayerMenu', MultiplayerMenuView],
		// ['/createroom', CreateRoomView],
		// ['/room', RoomView],
		// ['/leaderboard', LeaderboardView]
		// ['/multiplayer', MultiPlayerView]
	].forEach((route) => { Router.register(route[0], route[1]); });

	Router.open(window.location.pathname);
}

main();

