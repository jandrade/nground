/**
 * @fileOverview <%= moduleName %> Constants
 *
 * @description Constants required for this module
 *
 * @author <%= author %>
 */
(function(angular){
'use strict';

	/**
	 * <%= moduleName %> Constants
	 */
	 var constant = {};

	// component definition
	angular
		.module('<%= moduleName %>')
		.constant('<%= moduleName %>Constant', constant);

})(angular);