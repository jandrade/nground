/**
 * Gulp test:unit task
 * Perform unit tests using karma
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp test:unit
 * @see gulpfile.js
 */
module.exports = function () {
	'use strict';

	/**
	 * Imports
	 */
	var karma = require('karma').server;

	return function () {
		karma.start({
			configFile: __dirname + '/../test/karma.conf.js'
			//singleRun: true
		});
    };
};