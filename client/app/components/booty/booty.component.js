import template from './booty.html';
import controller from './booty.controller';
import './booty.styl';

let bootyComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default bootyComponent;