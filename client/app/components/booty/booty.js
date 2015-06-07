import angular from 'angular';
import 'angular-ui-router';
import bootyComponent from './booty.component'; 

let bootyModule = angular.module('booty', [
	'ui.router'
])
.directive('booty', bootyComponent);

export default bootyModule;