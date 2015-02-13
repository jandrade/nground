#Presentation Layer

This is the App Presentation Layer (CSS). Currently, we are using LESS to handle styles.



## Stack
- [LESS](http://lesscss.org/usage/)
- [Icomoon](https://icomoon.io/app/)

##LESS Structure

```
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
```

##General Rules

- **Images**: For handling images please use the following cases (sorted by priority):
 	1. Icon Fonts
	2. SVG Spritesheets
	3. PNG Spritesheets
	4. SVG Images
	5. PNG/JPG/GIF Images
		 
- **File Creation (LESS source files)**: 
	- If you are going to create a new directive, component, web component, please create a new LESS file for it (inside `/common` or `/modules/{{controller}}/name.less`).
	- If you are going to work in a new section/view of the site, please create a new LESS file inside `/modules/{{controller}}/{{view}}.less`.
	
	
##Build Process

To generate a compiled version of the LESS project, you should run:

`gulp css`

To watch for file changes and regenerate the compiled CSS file, run:

`gulp watch`

##CSS Documentation
We document CSS styles using a styleguide generator (kss, Styledocco), so please document all css classes to have a robust documentation.

e.g.

```
/**
 * A default button
 * 
 * @example
 * <a class="btn btn-default">Button</a>
 */
 .btn {]
```