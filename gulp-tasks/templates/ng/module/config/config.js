/**
 * @fileOverview <%= moduleName %> Routes
 *
 * @description Configure routes for this module
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
			.when('/', {
				controller: 'IndexController',
				controllerAs: 'ctrl',
				resolve: {},
				templateUrl: 'views/modules/<%= moduleName %>/index.html'
			});
	}

	/**
	 * <%= moduleName %> Run Block - Module initialization
	 */

	/* @ngInject */
	function run() {
	}

	// component definition
	angular
		.module('<%= moduleName %>')
		.config(config)
		.run(run);

})(angular);