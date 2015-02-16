/**
 * @fileOverview <%= factoryName %> Factory
 * Manage the connection between the Backend(API) and the controllers
 *
 * @author <%= author %>
 */
(function(){
'use strict';

	/* @ngInject */
	function <%= factoryName %>($http) {

		/**
		 * API response
		 */
		function getCompleteHandler(response) {
			return response.data;
		}

		/**
		 * Error retrieving data
		 */
		function getErrorHandler(error) {
			return error.data.error;
		}

		/**
		 * Get data from API
		 * @return {Promise}
		 */
		function fetch() {
			return $http.get('api/url')
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		return {
			fetch: fetch
		};
	}

	angular
		.module('<%= moduleName %>')
		.factory('<%= factoryName %>', <%= factoryName %>);
})();