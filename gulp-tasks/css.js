/**
 * Gulp css task
 * Generates the css compiled file from the LESS source files
 *
 * - get all less files
 * - concatenate all files into a single css file
 * - adds required css autoprefixes for selected vendors
 * - generates a source map (for debugging)
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp css
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	/**
	 * Imports
	 */
	var LessPluginCleanCSS = require("less-plugin-clean-css"),
    	cleancss = new LessPluginCleanCSS({advanced: true});
    	//reload = browserSync.reload;

	return function () {
    	gulp.src(config.app + '/less/app.less')
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.less({
			    plugins: [cleancss]
			}))
			.pipe(plugins.sourcemaps.write())
			.pipe(plugins.autoprefixer({
				browsers: config.browsers
			}))
			.pipe(gulp.dest(config.app + '/assets/css'))
			//.pipe(reload({ stream:true }))
			.pipe(plugins.notify({ message: 'CSS task complete' }));
    };
};