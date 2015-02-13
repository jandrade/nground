/**
 * Gulp Serve task
 * Creates a browserSync server instance
 * Watch Files For Changes & Reload
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp serve
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	/**
	 * Imports
	 */
	var browserSync = require('browser-sync'),
		reload = browserSync.reload;

	return function () {
    	browserSync(config.browserSync);

		gulp.watch(config.less, ['css', reload]);
		gulp.watch(config.html, {}, reload);
    };
};