/**
 * Gulp js task
 * - Get all javascript files
 * - Concatenate all files into a single js file
 * - Generates a source map (for debugging)
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp js
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	return function () {
		gulp.src(config.js)
	        .pipe(plugins.sourcemaps.init())
	        .pipe(plugins.sourcemaps.write('./'))
	    	.pipe(gulp.dest(config.public + '/assets/js'))
	    	.pipe(plugins.notify({ message: 'JS task complete' }));
    };
};