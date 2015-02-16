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
		appName,
		params = process.argv.splice(process.argv.length - 2, 2),
		subtask = params[0],
		name = params[1],
		nameFilled = true;

	if (!/^\-/.test(subtask)) {
		nameFilled = false;
		subtask = name;
		//return done("You must add a name for your component");
	}

	subtask = subtask.replace('-', '');

	gulp.storage.create('ng', __dirname + '/ng.json');

	modulesList = gulp.storage.get('modules') || [];
	appName = gulp.storage.get('appName');

	console.log(" /// APPP: ", __dirname, subtask, name);

	var questions = {
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
    		name: 'directiveName',
    		message: 'What is your directive name?'
		}
	};

	/**
	 * Generates an Angular Application
	 */
	components.app = function() {
		var answers;

		function prompts() {
			inquirer.prompt([
				{
					type: 'input',
		    		name: 'moduleName',
		    		message: 'What is your Angular app name?',
		    		default: pkg.name
				}
			], function( _answers ) {
				answers = _answers;
				console.log("app answers: ", answers);

				answers.author = pkg.author;

				gulp.storage.set('appName', answers.moduleName);

				// add module to storage
				modulesList.push(answers.moduleName);
				gulp.storage.set('modules', modulesList);

				execute();
				//return done();
			});
		}

		function execute() {
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
	        	console.log("END.......");
                done();
            });
		}

		if (!nameFilled) {
			console.log("You must add a name for your component");
			prompts();
		} else {
			execute();
		}
	};

	/**
	 * Generates an Angular Module
	 */
	components.module = function() {
		console.log("new module from app: ", gulp.storage.get('moduleName'));

		inquirer.prompt([
			questions.moduleAsInput,
			questions.moduleAsList
		], function( answers ) {
			console.log("answers: ", answers);
			var singleName = answers.moduleName;

			answers.author = pkg.author;

			answers.moduleName = answers.parentModule + '.' + answers.moduleName;

			// duplicate name, end stream
			if (modulesList.indexOf(answers.moduleName) > -1) {
				return done("Error: Duplicate module");
			}

			var path = answers.parentModule.replace(appName + '.', '').replace('.', '/') + '/' + singleName;

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
		});
	};

	/**
	 * Generates an Angular Directive
	 */
	components.directive = function() {

		inquirer.prompt([
			questions.moduleAsList,
			questions.directive
		], function( answers ) {
			console.log("answers: ", answers);
			return done();
		});
	};

	components[subtask]();

};