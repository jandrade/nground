/**
 * Gulp jshint task
 * Verifies JS code
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp jshint
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	return function () {
    	gulp.src(['./gulpfile.js', config.js])
	        .pipe(plugins.jshint())
	        .pipe(plugins.jshint.reporter('jshint-stylish'))
	        // Use gulp-notify as jshint reporter
		    .pipe(plugins.notify(function (file) {
		    	var results = (typeof file.jshint.results !== 'undefined') ? file.jshint.results.length : 0;
				if (file.jshint.success) {
				// Don't show something if success
				return;
				}
		      	return file.relative + ' (' + results + ' errors)\n';
		    }));
    };
};