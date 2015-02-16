/**
 * @fileOverview <%= componentName %> Directive
 *
 * @author <%= author %>
 */
(function(){
'use strict';

	/* @ngInject */
	function <%= componentName %>Directive() {

		function Link(scope, element, attr) {

			/**
			* @constructs <%= componentName %>Link
			*/
			(function init() {

			})();
		}

		return {
			restrict: 'A',
			link: Link,
			scope: {},
			templateUrl: 'template.html'
		};
	}

	angular
		.module('<%= moduleName %>')
		.directive('<%= componentName %>', <%= componentName %>Directive);

})();