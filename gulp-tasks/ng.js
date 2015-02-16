/**
 * Gulp ng task
 * Generates Angular classes (modules, directives, controllers, factories, services)
 *
 * @param  {Gulp} gulp
 * @param  {done} Task completed callback
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp ng ...
 * @see gulpfile.js
 */
module.exports = function (gulp, config, pkg, done) {
	'use strict';

	/**
	 * Imports
	 */
	var inquirer = require('inquirer'),
		template = require('gulp-template'),
		rename = require('gulp-rename'),
		storage = require('gulp-storage')(gulp);

	var components = {},
		modulesList = [],
		appName;

	gulp.storage.create('ng', __dirname + '/templates/ng.json');

	modulesList = gulp.storage.get('modules') || [];
	appName = gulp.storage.get('appName');

	/**
	 * Encapsulates all component types and builds every ng element
	 */
	var ComponentsContext = function() {
		var strategy,
			params = process.argv.splice(process.argv.length - 2, 2),
			subtask = params[0],
			name = params[1],
			nameFilled = true;

		/**
		 * @constructs ComponentsContext
		 */
		(function() {
			if (!/^\-/.test(subtask)) {
				nameFilled = false;
				subtask = name;
			}

			subtask = subtask.replace('-', '');

			switch(subtask) {
				case 'a':
					subtask = 'app';
				break;
				case 'c':
					subtask = 'controller';
				break;
				case 'd':
					subtask = 'directives';
				break;
				case 'f':
					subtask = 'factory';
				break;
				case 'm':
					subtask = 'module';
				break;
			}

			strategy = new components[subtask]();

			if (!nameFilled) {
				strategy.build();
			} else {
				strategy.execute();
			}
		})();
	};

	/**
	 * Questions List
	 * @type {Object}
	 */
	var questions = {
		/**
		 * App
		 */
		appName: {
			type: 'input',
    		name: 'moduleName',
    		message: 'What is your Angular app name?',
    		default: pkg.name
		},
		/**
		 * Modules
		 */
		moduleAsInput: {
			type: 'input',
    		name: 'moduleName',
    		message: 'What is your module name?'
		},
		moduleAsList: {
			type: 'list',
    		name: 'parentModule',
    		message: 'What is your parent module?',
    		choices: gulp.storage.get('modules'),
    		default: appName
		},
		/**
		 * Directive
		 */
		directive: {
			type: 'input',
    		name: 'componentName',
    		message: 'What is your directive name?'
		},
		/**
		 * Controller
		 */
		controller: {
			type: 'input',
    		name: 'componentName',
    		message: 'What is your controller name?'
		},
		/**
		 * Factory
		 */
		factory: {
			type: 'input',
    		name: 'factoryName',
    		message: 'What is your factory name?'
		},
		/**
		 * Less
		 */
		includeLess: {
			type: 'confirm',
    		name: 'includeLess',
    		message: 'Do you want to include a LESS file?',
    		default: 'n'
		}
	};

	/**-----------------------------------------
	 Strategies
	 -----------------------------------------*/

	/**
	 * Generates an Angular Application
	 */
	components.app = function() {
		var answers;

		function build() {
			inquirer.prompt([
				questions.appName
			], function( _answers ) {
				answers = _answers;

				gulp.storage.set('appName', answers.moduleName);

				// add module to storage
				modulesList.push(answers.moduleName);
				gulp.storage.set('modules', modulesList);

				execute();
			});
		}

		function execute() {
			answers.author = pkg.author;

			gulp.src([
				__dirname + '/templates/ng/app.js',
				__dirname + '/templates/ng/config.js'
			])
	        .pipe(template(answers))
	        .pipe(rename({
	        	prefix: answers.moduleName + '.'
	        }))
	        .pipe(gulp.dest(config.app + '/js/modules/app/'))
	        .on('end', function () {
	        	done();
            });
		}

		return {
			build: build,
			execute: execute
		};
	};

	/**
	 * Generates an Angular Module
	 */
	components.module = function() {
		var answers;

		function build() {
			inquirer.prompt([
				questions.moduleAsInput,
				questions.moduleAsList
			], function( _answers ) {
				answers = _answers;
				execute();
			});
		}

		function execute() {

			var singleName = answers.moduleName;

			answers.author = pkg.author;

			answers.moduleName = answers.parentModule + '.' + singleName;

			// duplicate name, end stream
			if (modulesList.indexOf(answers.moduleName) > -1) {
				return done("Error: Duplicate module");
			}

			var path = answers.parentModule.replace(appName, '').replace('.', '/') + '/' + singleName;

			// add module to storage
			modulesList.push(answers.moduleName);
			gulp.storage.set('modules', modulesList);

			gulp.src([
				__dirname + '/templates/ng/module.js',
				__dirname + '/templates/ng/module/**/*'
				])
		        .pipe(template(answers))
		        .pipe(rename(function(path) {
		        	// only rename files, not directories
		        	if (path.extname !== '') {
		        		path.basename = singleName + '.' + path.basename;
		        	}
		        }))
		        .pipe(gulp.dest(config.app + '/js/modules/' + path + '/'))
		        .on('end', function () {
	                done();
	            });
		}

		return {
			build: build,
			execute: execute
		};
	};

	/**
	 * Generates an Angular Directive
	 */
	components.directive = function() {
		var answers;

		function build() {
			inquirer.prompt([
				questions.directive,
				questions.moduleAsList,
				questions.includeLess
			], function( _answers ) {
				answers = _answers;
				execute();
			});
		}

		function execute() {
			var singleName = answers.componentName;

			answers.author = pkg.author;
			answers.moduleName = answers.parentModule;

			var path = answers.parentModule.replace(appName, '').replace('.', '/') + '/directives/';

			if (answers.includeLess) {
				addLess(answers, 'directives');
			}

			gulp.src([
				__dirname + '/templates/ng/directive.js'
				])
		        .pipe(template(answers))
		        .pipe(rename(function(path) {
		        	// only rename files, not directories
		        	if (path.extname !== '') {
		        		path.basename = singleName + '.' + path.basename;
		        	}
		        }))
		        .pipe(gulp.dest(config.app + '/js/modules/' + path + '/'))
		        .on('end', function () {
	                done();
	            });
		}

		return {
			build: build,
			execute: execute
		};
	};

	/**
	 * Generates an Angular Controller
	 */
	components.controller = function() {
		var answers;

		function build() {
			inquirer.prompt([
				questions.controller,
				questions.moduleAsList,
				questions.includeLess
			], function( _answers ) {
				answers = _answers;
				execute();
			});
		}

		function execute() {
			var singleName = answers.componentName;

			answers.author = pkg.author;
			answers.moduleName = answers.parentModule;

			if (answers.includeLess) {
				addLess(answers, 'controllers');
			}

			var path = answers.parentModule.replace(appName, '').replace('.', '/') + '/controllers/';

			gulp.src([
				__dirname + '/templates/ng/controller.js'
				])
		        .pipe(template(answers))
		        .pipe(rename(function(path) {
		        	// only rename files, not directories
		        	if (path.extname !== '') {
		        		path.basename = singleName + '.' + path.basename;
		        	}
		        }))
		        .pipe(gulp.dest(config.app + '/js/modules/' + path + '/'))
		        .on('end', function () {
	                done();
	            });
		}

		return {
			build: build,
			execute: execute
		};
	};

	/**
	 * Generates an Angular Factory
	 */
	components.factory = function() {
		var answers;

		function build() {
			inquirer.prompt([
				questions.factory,
				questions.moduleAsList
			], function( _answers ) {
				answers = _answers;
				execute();
			});
		}

		function execute() {
			var singleName = answers.factoryName;

			answers.author = pkg.author;
			answers.moduleName = answers.parentModule;

			var path = answers.parentModule.replace(appName, '').replace('.', '/') + '/factories/';

			gulp.src([
				__dirname + '/templates/ng/factory.js'
				])
		        .pipe(template(answers))
		        .pipe(rename(function(path) {
		        	// only rename files, not directories
		        	if (path.extname !== '') {
		        		path.basename = singleName + '.' + path.basename;
		        	}
		        }))
		        .pipe(gulp.dest(config.app + '/js/modules/' + path + '/'))
		        .on('end', function () {
	                done();
	            });
		}

		return {
			build: build,
			execute: execute
		};
	};


	function addLess(answers, kind) {
		var singleName = answers.componentName;

		var path = answers.parentModule.replace(appName, '').replace('.', '/') + '/' + kind + '/';

		gulp.src([
			__dirname + '/templates/ng/component.less'
			])
	        .pipe(template({
	        	componentName: answers.componentName
	        }))
	        .pipe(rename(function(path) {
	        	// only rename files, not directories
	        	if (path.extname !== '') {
	        		path.basename = singleName + '.' + path.basename;
	        	}
	        }))
	        .pipe(gulp.dest(config.app + '/less/views/' + path + '/'));
	}

	new ComponentsContext();

};