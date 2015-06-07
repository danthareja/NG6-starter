import template from './about.html!text';
import controller from './about.controller.js';
import './about.css!';

let aboutComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default aboutComponent;