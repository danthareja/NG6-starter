import angular from 'angular'; // from github
import uiRouter from 'angular-ui-router'; // explicitly from npm for export
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

let myApp = angular.module('app', [
	uiRouter,
	Common.name,
	Components.name
])
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [myApp.name])
});