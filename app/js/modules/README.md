## Anatomy of a Module

```
|	|- module
|	|	|- config
|	|	|	|- config.js (Module configuration)
|	|	|	|- constants.js (Module constants)
|	|	|	|- routes.js (Module routes)
|	|	|- controllers
|	|	|	|- add.controller.js
|	|	|	|- index.controller.js
|	|	|- directives (Shared directives for current module)
|	|	|	|- file.directive.js
|	|	|	|- slider.directive.js
|	|	|- factories (API Calls)
|	|	|	|- user.api.js
|	|- tests (Unit testing / e2e)
|	| 	|- e2e
|	|	|	|- page.e2e.js
|	| 	|- unit
|	|	|	|- module
|	|	|	|	|- controllers
|	|	|	|	|	|- add.spec.js
|	|	|	|	|	|- index.spec.js
|	|	|	|	|- directives
|	|	|	|	|	|- modal.spec.js


```