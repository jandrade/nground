/**
 * Gulp Build task
 * Generates a minified version for both css and js files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp build
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	return function () {
		gulp.src(config.app + '/index.html')
//			.pipe(plugins.targethtml('dist'))
			.pipe(plugins.usemin({
				//css: [plugins.minifyCss(), 'concat'],
				//js: [plugins.uglify({outSourceMap: true})]
			}))
			.pipe(gulp.dest(config.public))
			.pipe(plugins.notify({ message: 'Build task complete' }));
    };
};