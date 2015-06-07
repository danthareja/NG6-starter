import angular from 'angular';
import UserFactory from './user.factory.js';

let userModule = angular.module('user', [])
	.factory('User', UserFactory);
	
export default userModule; 