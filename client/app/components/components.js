import angular from 'angular';
import Home from './home/home.js';
import About from './about/about.js'; 

let componentModule = angular.module('app.components', [
	Home.name,
	About.name
]);

export default componentModule;