/**
 * @fileOverview <%= moduleName %> Module - App initialization
 *
 * @author <%= author %>
 */
(function(angular){
	'use strict';

	/**
	 * <%= moduleName %> Run Block
	 */

	/* @ngInject */
	function run() {
	}

	angular
		.module('<%= moduleName %>',
			[]
		)
		.run(run);

})(angular);