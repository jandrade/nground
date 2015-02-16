/**
 * @fileOverview <%= directiveName %> Directive
 *
 * @author <%= author %>
 */
(function(){
'use strict';

  /* @ngInject */
  function <%= directiveName %>Directive() {

	function Link(scope, element, attr) {

		/**
		* @constructs <%= directiveName %>Link
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
	.directive('<%= directiveName %>', <%= directiveName %>Directive);

})();