/**
 * Gulp test:e2 task
 * Perform end to end tests
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp test:e2e
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	/**
	 * Imports
	 */
	var protractor = require("gulp-protractor").protractor;


	return function () {
		gulp.src(["./test/e2e/*.spec.js"])
			.pipe(protractor({
				configFile: "./test/protractor.conf.js",
				debug: true,
				args: ['--baseUrl', 'http://localhost/' + config.browserSync.port]
			}))
		.on('error', function(e) { console.log(JSON.stringify(e)); });
    };
};