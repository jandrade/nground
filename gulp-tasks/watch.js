/**
 * Gulp Watch task
 * Watch for changed files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp watch
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	return function () {
    	//gulp.watch([config.js, config.test], ['test:unit', 'jshint']);
    	gulp.watch(config.less, ['css']);
    };
};