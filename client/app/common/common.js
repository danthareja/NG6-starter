import angular from 'angular';
import Navbar from './navbar/navbar.js';
import Hero from './hero/hero.js';
import User from './user/user.js';

let commonModule = angular.module('app.common', [
	Navbar.name,
	Hero.name,
	User.name
]);

export default commonModule;