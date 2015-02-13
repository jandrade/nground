#Interfaz - El Picó App

##Table of Contents
1. Instalation
2. Tech Stack
3. App Structure
4. Testing
6. Routes
7. API


## Instalation

Run the following commands:

1. `cd pico`

2. `sudo npm run install`

3. `gulp`

4. Navigate: `http://localhost/pico/app/`


## Build Process

### Default task
`gulp`

### Watch for file changes

If you want to have the latest version of the code in the browser, make sure to run this command:

`gulp watch`

This will be watching for changes in LESS files.

### Generate CSS compiled file
`gulp css

### Inject required JS files
`gulp inject`

### Run tests
`gulp test`

`gulp test:unit` (only unit tests)

`gulp test:e2e` (only End2End tests)

### Building

`gulp build:cordova` (Builds the project and copy required files to cordova)


## Stack^
- AngularJS
	- angular-route
	- angular-animate
	- ng-file-upload
- Gulp // requires nodeJS
- Karma
- Jasmine
- Protractor

^ For a more detailed list, please see `/bower.json`


---------------------------------------

##App Structure

```
|- app/ (frontend application - development environment)
|	|- api/	(dummy API - mock services)
|	|- assets (static files)
|	|	|- css
|	|	|- fonts (Icon Fonts)
|	|	|- img
|	|	|- js
|	|	|	|- (put custom JS code here - not required by the Angular App)
|	|- bower_components (third-pary libraries)
|	|- modules (sub-systems)
|	|	|- config
|	|	|	|- config.js (Global configuration)
|	|	|	|- constants.js (Global constants)
|	|	|- submodule
|	|	|	|- sub-submodule
|	|	|	|	|- (put controllers, directives, factories, services here)
|	|	|	|- ....
|	|	|	|- (put more modules here)
|	|	|- app.js (Initialization of the App)
|	|- less (source LESS files)
|	|	|- base
|	|	|	|- base.less (base tags)
|	|	|	|- fonts.less (Web fonts / icon fonts)
|	|	|	|- layout.less (Master layout)
|	|	|- common (shared UI components)
|	|	|	|- buttons.less
|	|	|	|- forms.less
|	|	|- config
|	|	|	| - mixins.less (helpers)
|	|	|	| - vars.less
|	|	|- elements (Custom elements)
|	|	|	|- buttons.less
|	|	|	|- forms.less
|   |   |- layout (master layout)
|   |   |   |- footer.less
|   |   |   |- header.less
|   |   |   |- layout.less
|   |   |   |- nav.less
|	|	|- views
|	|	|	|- module
|	|	|	|	|- page.less
|	|	app.less (main LESS file)
|	|- views (HTML Partials)
|	|	|- common
|	|	|- module
|	|- index.html
|- public/	(frontend application - production env)
|	|- assets (compiled files here)
|	|	|- css
|	|	|	|- app.css
|	|	|	|- app.min.css
|	|	|	|- app.min.css.map
|	|	|- fonts (Icon Fonts)
|	|	|	|- app.eot
|	|	|	|- app.svg
|	|	|	|- app.ttf
|	|	|	|- app.woff
|	|	|- img
|	|	|- js
|	|	|	|- app.js
|	|	|	|- app.min.js
|	|	|	|- app.min.js.map
|	|	|	|- templates.js
|	|- index.html
|- bower.json
|- gulpfile.js
|- package.json
```

###Anatomy of a Module

```
|	|- projects
|	|	|- config
|	|	|	|- config.js (Module configuration)
|	|	|	|- constants.js (Module constants)
|	|	|	|- routes.js (Module routes)
|	|	|- controllers
|	|	|	|- add.controller.js
|	|	|	|- edit.controller.js
|	|	|- directives (Shared directives for current module)
|	|	|	|- file.directive.js
|	|	|	|- modal.directive.js
|	|	|- factories (API Calls)
|	|	|	|- user.api.js
|	|	|- services (API Calls/models if it's required)
|	|	|	|- user.api.js
|	|	|- tests (Unit testing / e2e)
|	|	| 	|- e2e
|	|	|	|	|- page.e2e.js
|	|	| 	|- unit
|	|	|	|	|- module
|	|	|	|	|	|- add.spec.js
|	|	|	|	|	|- edit.spec.js
|	|	|	|	|	|- modal.spec.js


```

##Testing (Unit Testing, e2e)

To run tests, you should run the following command in your terminal:

`gulp test`

### Unit Testing
<https://docs.angularjs.org/guide/unit-testing>

We use Jasmine to perform unit testing in our app. If you want to run only unit testing, use:

`gulp test:unit`

After running it, you can see the results of the coverage test inside `/jaggerr/coverage/`.

### e2e (End to End)
<https://docs.angularjs.org/guide/e2e-testing>

We use Protractor to perform e2e testing in our app. If you want to run only e2e, use:

`gulp test:e2e`

NOTE: To run this e2e tests, you must have installed selenium in your computer.


---------------------------------------

##Routes

Below you can see the available routes for the frontend application.

```
/#/projects/add				[project form]
```

## API

```
[GET]	/api/category  (Get site data)
[GET]	/api/options  (Gets metadata for the Project form)
[GET]	/api/user  (Gets current user information)
```