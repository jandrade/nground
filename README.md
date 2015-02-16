#nground

Starter kit for Angular + Gulp + Less applications

##Table of Contents
1. Instalation
2. Build Process
3. Stack
4. App Structure
5. Testing
6. Routes
7. API

-----------------------------------

## 1. Instalation

Run the following commands:

1. `cd nground`

2. `sudo npm run install`

3. `gulp serve`

4. Navigate to: `http://localhost:3000`

--------------------------------------

## 2. Stack^
- AngularJS
	- angular-route
	- angular-animate
- Gulp // requires nodeJS
- Karma
- Jasmine
- Protractor

^ For a detailed list, please see `/bower.json`


-------------------------------------


## 3. Build Process

### Default task
`gulp`

### Javascript minification
`gulp js`

### Javascript linting
`gulp jshint`

### Generate CSS compiled file
`gulp css`

### Watch files for changes and reload
`gulp serve`

### Watch for file changes

If you want to have the latest version of the code in the browser, make sure to run this command:

`gulp watch`

This will be watching for changes in LESS files.

### Inject required JS files
`gulp inject`

### Run tests

`gulp test`

`gulp test:unit` (only unit tests)

`gulp test:e2e` (only End2End tests)

### Building

`gulp build:prod` (Builds the project and copy required files to the production environment)

### Angular Generator

`gulp ng -app` (Creates an Angular Application)

`gulp ng -module` (Creates an Angular Module)

`gulp ng -directive` (Creates an Angular Directive)

`gulp ng -controller` (Creates an Angular Controller)

`gulp ng -factory` (Creates an Angular Factory)


---------------------------------------

## 4. App Structure

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

---------------------------------------

## 5. Testing (Unit Testing, e2e)

To run tests, you should run the following command in your terminal:

`gulp test`

### Unit Testing
<https://docs.angularjs.org/guide/unit-testing>

We use Jasmine to perform unit testing in our app. If you want to run only unit testing, use:

`gulp test:unit`

After running it, you can see the results of the coverage test inside `/coverage/`.

### e2e (End to End)
<https://docs.angularjs.org/guide/e2e-testing>

We use Protractor to perform e2e testing in our app. If you want to run only e2e, use:

`gulp test:e2e`

NOTE: To run this e2e tests, you must have installed selenium in your computer.


---------------------------------------

## 6. Routes

These are the available routes for the application.

```
/#/				[Homepage]
/#/foo-bar		[page details]
```

---------------------------------------

## 7. API

```
[GET]	/api/data  (Get site data)
[GET]	/api/user  (Gets user information)
```