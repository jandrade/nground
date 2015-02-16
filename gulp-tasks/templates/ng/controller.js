/**
 * @fileOverview <%= controllerName %> controller
 *
 * @description
 *
 * @author <%= author %>
 *
 * ROUTE: /#/<%= moduleName %>/<%= controllerName %>
 */
(function(angular){
'use strict';

	/* @ngInject */
	function <%= controllerName %>Controller($scope, $rootScope, CategoryAPI) {

		var vm = this;

		/**
		 * @constructs <%= controllerName %>Controller
		 */
		(function init() {

		})();
	}

	angular
		.module('<%= moduleName %>')
		.controller('<%= controllerName %>Controller', <%= controllerName %>Controller);
})(angular);