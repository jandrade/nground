/**
 * @fileOverview <%= moduleName %> Configuration
 *
 * @author <%= author %>
 */
(function(angular){
'use strict';

	/**
	 * <%= moduleName %> Configuration
	 */

	/* @ngInject */
	function config($routeProvider) {

		// define routes
		$routeProvider
			.otherwise({ redirectTo: '/' });
	}

	// component definition
	angular
		.module('<%= moduleName %>')
		.config(config);

})(angular);