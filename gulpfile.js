'use strict';

/**
 * Imports
 */
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	requireDir = require('require-dir'),
	config = require('./config.json'),
	pkg = require('./package.json'),
	tasks = requireDir('./gulp-tasks');

/** ===================================================
 * 						TASKS
 * ===================================================*/

/**
 * Default task
 *
 * @example
 * gulp
 */
gulp.task('default', ['jshint', 'css', 'inject', 'watch']);


/**----------------------------------------------------
 * Javascript
 */
gulp.task('ng', function(done) {
	tasks.ng(gulp, config, pkg, done);

	function done() {
		gulp.start('inject');
	}
});
// Javascript minification
gulp.task('js', ['jshint'], tasks.js(gulp, plugins, config));

// Javascript Linting
gulp.task('jshint', tasks.jshint(gulp, plugins, config));

// Testing
gulp.task('test', ['jshint', 'test:unit', 'test:e2e']);

// End2End tests using Protractor
gulp.task('test:e2e', ['jshint'], tasks.testE2e(gulp, plugins, config));

// Unit tests using Karma and Jasmine
gulp.task('test:unit', ['jshint'], tasks.testUnit());

/**----------------------------------------------------
 * CSS
 */

// css compiling
gulp.task('css', tasks.css(gulp, plugins, config));

/**----------------------------------------------------
 * Watching
 */

// Watch LESS files For Changes
gulp.task('watch', tasks.watch(gulp, plugins, config));

// watch files for changes and reload
gulp.task('serve', tasks.serve(gulp, plugins, config));

// Add required scripts and styles to index.html and karma.conf.js
gulp.task('inject', tasks.inject(gulp, plugins, config));

/**----------------------------------------------------
 * Building
 */

// copy files to public
gulp.task('copy', tasks.copy(gulp, plugins, config));

// copy files to prod
gulp.task('copy:prod', tasks.copyProd(gulp, plugins, config));

// delete copied files
gulp.task('clean', tasks.clean(config));

// Builds a dist/public version
gulp.task('build', ['clean', 'test:unit', 'copy', 'images'], tasks.build(gulp, plugins, config));

// Builds a prod version
gulp.task('build:prod', ['build', 'copy:prod']);