/**
 * Gulp copy task
 * Copy static assets from app to public env
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp copy
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	/**
	 * Imports
	 */
	var templateCache = require('gulp-angular-templatecache');

	return function () {
		gulp.src(config.app + '/assets/**/*')
			.pipe(gulp.dest(config.public + '/assets'));

		gulp.src(config.app + '/views/**/*.html')
			.pipe(templateCache('app.templates.js', {
				module: 'app',
				root: 'views/'
			}))
			.pipe(gulp.dest(config.public + '/assets/views'));

		gulp.src(config.app + '/api/**/*.json')
			.pipe(gulp.dest(config.public + '/api'));
    };
};