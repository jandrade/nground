exports.config = {
	baseUrl: 'http://localhost/rrisk-fe/app/',
	specs: ['test/e2e/**/*.spec.js'],
	suites: {
		projects: 'test/e2e/projects/**/*.spec.js'
	},
	seleniumAddress: 'http://127.94.0.1:4444/wd/hub',
	// If chromeOnly is true, we dont need to stand the selenium server.
	// If you want to test with firefox, then set this to false and change the browserName
	directConnect: false,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		isVerbose : true,
    	includeStackTrace : true
	}
};