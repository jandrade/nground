/**
 * Gulp Inject task
 * Add required scripts and styles to index.html and karma.conf.js
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp inject
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {
	'use strict';

	/**
	 * Imports
	 */
	var wiredep = require('wiredep').stream,
		queue = require('streamqueue');

	/**
	 * Constants
	 */
	var BOWER_COMPONENTS = require('wiredep')().js.concat(
			'bower_components/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js',
			'bower_components/Recorderjs/recorder.js',
			config.app + '/views/**/*.html'
	   	);

	/**
	 * Add test files to the current Stream Queue
	 */
	function testFiles() {
	  return new queue({objectMode: true})
	    .queue(gulp.src(BOWER_COMPONENTS))
	    .queue(gulp.src(config.js))
	    .queue(gulp.src(config.test))
	    .done();
	}

	return function () {
		/*--------------------------------------------
			JS, CSS
		--------------------------------------------*/

		// inject html, css
    	gulp.src(config.app + '/index.html')
		  	.pipe(wiredep({
				devDependencies: true,
				exclude: [ /angular-mocks/ ]
			}))
			.pipe(plugins.inject(
		  		gulp.src([
		  			config.js,
		  			config.app + '/assets/**/*.css'
		  		]), {read: false, relative: true, addRootSlash: false}
		  	))
			.pipe(gulp.dest(config.app))
			.pipe(plugins.notify({ message: 'inject task completed' }));

		/*--------------------------------------------
			LESS
		--------------------------------------------*/

		var lessOpts = {
			starttag: '//- inject:less',
			endtag: '//- endinject',
			read: false,
			relative: true,
			addRootSlash: false,
			transform: function (filepath) {
				if (filepath.slice(-5) === '.less') {
					return "@import '" + filepath + "';";
				}
			}
		};

		// inject less files
		gulp.src(config.app + '/less/app.less')
		  	.pipe(plugins.inject( gulp.src(config.app + '/less/views/**/*.less'), lessOpts) )
			.pipe(gulp.dest(config.app + '/less'))
			.pipe(plugins.notify({ message: 'inject LESS task completed' }));

		/*--------------------------------------------
			Karma
		--------------------------------------------*/

		var karmaOpts = {
		    starttag: 'files: [',
		    endtag: ']',
		    relative: true,
		    addRootSlash: false,
		    transform: function (filepath, file, i, length) {
		    	return '"../' + filepath + '"' + (i + 1 < length ? ',' : '');
		    }
		};

		// inject js files into karma config file
		gulp.src('./test/karma.conf.js')
			.pipe(plugins.inject(testFiles(), karmaOpts))
			.pipe(gulp.dest('./test/'));
    };
};