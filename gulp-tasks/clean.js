/**
 * Gulp clean task
 * Delete compiled files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp clean
 * @see gulpfile.js
 */
module.exports = function (config) {
	'use strict';

	/**
	 * Imports
	 */
	var del = require('del');

	return function () {
		del([config.public]);
	};
};