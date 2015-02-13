/**
 * Gulp copy task
 * Copy static assets from public to prod env
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp copy:prod
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	return function () {
    	gulp.src(config.public + '/assets/**/*')
			.pipe(gulp.dest(config.prod + '/assets'));
    };
};