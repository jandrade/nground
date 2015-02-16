/**
 * Gulp images task
 * Optimize images
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp images
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	return gulp.src(config.app + '/assets/img/*')
	        .pipe(plugins.imagemin({
	            progressive: true,
	            svgoPlugins: [{removeViewBox: false}],
      			interlaced: true
	        }))
	        .pipe(gulp.dest(config.public));
    };
};