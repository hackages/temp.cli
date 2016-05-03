/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _karma = __webpack_require__(1);

	var _karma2 = _interopRequireDefault(_karma);

	var _linter = __webpack_require__(16);

	var _linter2 = _interopRequireDefault(_linter);

	var _bamboo = __webpack_require__(19);

	var _bamboo2 = _interopRequireDefault(_bamboo);

	var _webpack = __webpack_require__(20);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _watchFiles = __webpack_require__(24);

	var _watchFiles2 = _interopRequireDefault(_watchFiles);

	var _importCollection = __webpack_require__(25);

	var _importCollection2 = _interopRequireDefault(_importCollection);

	var _protractor = __webpack_require__(28);

	var _protractor2 = _interopRequireDefault(_protractor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: Command line tool
	**/

	var cliParser = _cliparse2.default.cli({
	  name: 'crelan <command> [options]',
	  description: 'Crelan CLI tools to build web applications',
	  commands: [_webpack2.default, _linter2.default, _watchFiles2.default, _bamboo2.default, _karma2.default, _importCollection2.default, _protractor2.default],
	  version: __webpack_require__(29).version
	});

	_cliparse2.default.parse(cliParser);

	exports.default = cliParser;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _karmaRunner = __webpack_require__(4);

	var _karmaRunner2 = _interopRequireDefault(_karmaRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testCMD = _cliparse2.default.command('test', {
	  description: 'Running unit tests with Karma',
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, _karmaRunner2.default); /**
	                           * CLI tools: Testing with Karma
	                           **/


	exports.default = testCMD;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("cliparse");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _chalk = __webpack_require__(5);

	var _chalk2 = _interopRequireDefault(_chalk);

	var _karma = __webpack_require__(6);

	var _karma2 = _interopRequireDefault(_karma);

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var karmaConfigFile = __webpack_require__(14);
	var karmaConfigCI = __webpack_require__(15);

	var testRunner = function testRunner(params, options) {
	  return new Promise(function (resolve, reject) {
	    console.log(_chalk2.default.bold.green('Testing starting...'));
	    var _params$options = params.options;
	    var watch = _params$options.watch;
	    var ci = _params$options.ci;


	    var options = {
	      configFile: _path2.default.resolve(__dirname, karmaConfigFile),
	      webpack: _webpack2.default,
	      singleRun: !watch,
	      reporterOptionsOuput: _path2.default.resolve(process.cwd(), 'mocha.json')
	    };

	    if (ci) {
	      options = Object.assign(options, karmaConfigCI);
	    }

	    // Start the server and run the tests
	    new _karma2.default.Server(options, function (exitCode) {
	      if (exitCode > 0) {
	        reject(new Error('Hey, something really bad happened with your tests'));
	      } else {
	        resolve();
	        console.log(_chalk2.default.bold.green('Done...'));
	      }
	    }).start();

	    return resolve();
	  });
	};

	exports.default = testRunner;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("karma");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _chalk = __webpack_require__(5);

	var _chalk2 = _interopRequireDefault(_chalk);

	var _webpack = __webpack_require__(8);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _pathExists = __webpack_require__(9);

	var _pathExists2 = _interopRequireDefault(_pathExists);

	var _bowerWebpackPlugin = __webpack_require__(10);

	var _bowerWebpackPlugin2 = _interopRequireDefault(_bowerWebpackPlugin);

	var _shelljs = __webpack_require__(11);

	var _utils = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cwd = process.cwd();
	var nodeModules = _path2.default.resolve(__dirname, '../node_modules');

	var config = {
	  devtool: 'inline-source-map',
	  entry: (0, _utils.entry)(),
	  output: {
	    filename: 'index.js',
	    path: _path2.default.join(cwd, 'dist')
	  },
	  quiet: true,
	  resolveLoader: {
	    fallback: nodeModules
	  },
	  resolve: {
	    extensions: ['', '.js', '.html', '.css']
	  },
	  stats: {
	    chunks: false,
	    colors: true,
	    reasons: true,
	    timings: true
	  },
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      loader: 'babel',
	      exclude: /bower_components|node_modules/,
	      plugins: ["transform-async-to-generator"],
	      query: {
	        presets: [_path2.default.join(nodeModules, 'babel-preset-es2015'), _path2.default.join(nodeModules, 'babel-preset-stage-0')]
	      }
	    }, {
	      test: /\.json$/,
	      loader: 'json'
	    }]
	  },
	  plugins: [new _webpack2.default.ResolverPlugin(new _webpack2.default.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new _bowerWebpackPlugin2.default({
	    modulesDirectories: ['bower_components'],
	    manifestFiles: 'bower.json',
	    includes: /\.js$/,
	    excludes: [],
	    searchResolveModulesDirectories: true
	  })]
	};

	module.exports = config;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("path-exists");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("bower-webpack-plugin");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("shelljs");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.entry = undefined;

	var _fs = __webpack_require__(13);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _pathExists = __webpack_require__(9);

	var _pathExists2 = _interopRequireDefault(_pathExists);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cwd = process.cwd();
	var packageJSON = _path2.default.join(cwd, 'package.json');

	// this use index.js by default but you can change that by defining
	// the entry point inside your package.json
	var entry = exports.entry = function entry() {

	  var main = _path2.default.resolve(cwd, 'package.json'); // entry defined inside package.json
	  var index = _path2.default.resolve(cwd, 'index.js');

	  if (_pathExists2.default.sync(main)) {
	    return './' + getPath(main);
	  } else if (_pathExists2.default.sync(index)) {
	    return index;
	  }

	  // Hey, we need an entry point!! Let's create one for you
	  touch('index.js');
	  return index;
	};

	var getPath = function getPath(p) {
	  var content = _fs2.default.readFileSync('package.json', 'utf-8');
	  return JSON.parse(content).main;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9fa559235e220b278ee6d019bf552b9d.js";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Karma configuration for ci
	var path = __webpack_require__(2);
	var context = path.resolve(process.cwd(), 'report');

	var configuration = {
	  coverageReporter: {
	    type: 'lcovonly',
	    dir: context,
	    subdir: '.',
	    file: 'lcov.dat'
	  },
	  reporters: ['progress', 'bamboo', 'coverage'],
	  browsers: ['PhantomJS'],
	  singleRun: false
	};

	exports.default = configuration;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _eslintRunner = __webpack_require__(17);

	var _eslintRunner2 = _interopRequireDefault(_eslintRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers; /**
	                                          * CLI tools for Crelan Bank
	                                          **/

	var lintCMD = _cliparse2.default.command('lint', {
	  description: 'Lint JS file following airBnB coding guidelines by default',
	  args: [_cliparse2.default.argument("source", {
	    description: "Files or directory to be parsed",
	    parser: function parser(value) {
	      console.log(value);
	    }
	  })],
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, _eslintRunner2.default);

	exports.default = lintCMD;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eslint = __webpack_require__(18);

	var _eslint2 = _interopRequireDefault(_eslint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                    * Lint your code all the time and let's write cleaner code
	                                                                                                                                                                                                    **/

	var CLIEngine = _eslint2.default.CLIEngine;

	var linter = function linter(params) {
	  console.log(params);
	  return false;
	  return new Promise(function (resolve, reject) {
	    var cli = new CLIEngine({
	      envs: ['browser', 'node']
	    });

	    var report = cli.executeOnFiles([].concat(_toConsumableArray(params.options.source)));

	    return resolve(CLIEngine.getErrorResults(report.results));
	  });
	};

	exports.default = linter;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("eslint");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _karmaRunner = __webpack_require__(4);

	var _karmaRunner2 = _interopRequireDefault(_karmaRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bambooCMD = _cliparse2.default.command('bamboo', {
	  description: 'Generate mocha.json and report for continuous integration'
	}, _karmaRunner2.default.bind(null, { options: { ci: true } })); /**
	                                                                 * CLI tools for Crelan Bank
	                                                                 **/

	exports.default = bambooCMD;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(21);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers;


	var buildCMD = _cliparse2.default.command('build', {
	  description: 'Build all your static assets using Webpack',
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch of js files'
	  })]
	}, _webpackRunner2.default);

	exports.default = buildCMD;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(22);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(23);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webpackRunner = function webpackRunner(params) {
	  return params.options.watch ? (0, _webpack2.default)() : (0, _webpack4.default)();
	};

	exports.default = webpackRunner;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(8);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(7);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Watch all the files
	**/
	var watch = function watch() {
	  return new Promise(function (resolve, reject) {
	    var handler = function handler(error, stats) {
	      if (error) {
	        return reject(error);
	      }
	      console.log(stats.toString(_webpack4.default.stats));
	      return resolve();
	    };
	    (0, _webpack2.default)(_webpack4.default).watch({}, handler);
	  });
	};

	exports.default = watch;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(8);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(7);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Create application bundles from the source file
	**/

	var bundle = function bundle() {
	  return new Promise(function (resolve, reject) {
	    var handler = function handler(error, stats) {
	      if (error) {
	        return reject(error);
	      }
	      console.log(stats.toString(_webpack4.default.stats));
	      return resolve();
	    };

	    (0, _webpack2.default)(_webpack4.default).run(handler);
	  });
	};

	exports.default = bundle;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(21);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers;


	var watchCMD = _cliparse2.default.command('watch', {
	  description: 'Watch files using webpack, babel, eslint'
	}, _webpackRunner2.default.bind(null, { options: { watch: true } }));

	exports.default = watchCMD;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _child_process = __webpack_require__(26);

	var _child_process2 = _interopRequireDefault(_child_process);

	var _exec = __webpack_require__(27);

	var _exec2 = _interopRequireDefault(_exec);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var importAll = function importAll() {
	  (0, _exec2.default)('bb import-collection');
	}; /**
	   * CLI tools for Crelan Bank
	   **/


	var importAllCMD = _cliparse2.default.command('import-all', {
	  description: 'Import backbase collection'
	}, importAll);

	exports.default = importAllCMD;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _child_process = __webpack_require__(26);

	var _child_process2 = _interopRequireDefault(_child_process);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var exec = function exec(command) {
	  _child_process2.default.exec(command, function (err, stdout, stderr) {
	    if (err) {
	      console.log(err);
	    }

	    console.log(stdout);
	  });
	}; /**
	   * CLI tools for Crelan Bank: execute child process
	   **/


	exports.default = exec;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _exec = __webpack_require__(27);

	var _exec2 = _interopRequireDefault(_exec);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var protractor = function protractor() {
	  (0, _exec2.default)('npm run protractor');
	}; /**
	   * CLI tools: Running end to end test with protractor
	   **/

	var testCMD = _cliparse2.default.command('e2e', {
	  description: 'Running end to end tests with protractor'
	}, protractor);

	exports.default = testCMD;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		"name": "crelan-cli",
		"version": "0.0.2",
		"description": "cli to build web applications at Crelan",
		"main": "bin/index.js",
		"scripts": {
			"prebamboo": "rm -rf mocha.json && npm i",
			"codevcov": "mocha -- -R -spec && codecov",
			"lint": "eslint scripts",
			"build": "webpack --config webpack.config.js",
			"watch": "webpack --config ./webpack.config.js -w",
			"runTest": "babel-node tools/exec karma",
			"bamboo": "mocha -R mocha-bamboo-reporter",
			"start": "babel-node start.js",
			"predeploy": "npm run build && cp -rf tools/config dist",
			"deploy": "node publish.js",
			"start-driver": "webdriver-manager start",
			"update-driver": "webdriver-mananger update",
			"protractor": "protractor config.js",
			"e2e": "npm run start-driver & protractor config.js"
		},
		"bin": {
			"crelan": "bin/index.js",
			"cl": "bin/index.js"
		},
		"publishConfig": {
			"registry": "http://hn198.crelan.be:8081/nexus/content/repositories/npm-internal/"
		},
		"keywords": [
			"crelan",
			"react",
			"backbase",
			"javascript",
			"angular"
		],
		"author": "crelan team & hackages.io",
		"license": "MIT",
		"dependencies": {
			"babel-cli": "^6.6.5",
			"babel-core": "^6.7.4",
			"babel-loader": "^6.2.4",
			"babel-plugin-transform-async-to-generator": "^6.7.4",
			"babel-plugin-transform-runtime": "^6.6.0",
			"babel-polyfill": "^6.7.4",
			"babel-preset-es2015": "^6.6.0",
			"babel-preset-stage-0": "^6.5.0",
			"babel-register": "^6.7.2",
			"babel-runtime": "^6.6.1",
			"bower-webpack-plugin": "^0.1.9",
			"chai": "^3.5.0",
			"chalk": "^1.1.3",
			"cliparse": "^0.2.5",
			"eslint": "^2.5.3",
			"eslint-config-airbnb": "^6.2.0",
			"eslint-loader": "^1.3.0",
			"eslint-plugin-react": "^4.2.3",
			"estraverse": "^4.2.0",
			"estraverse-fb": "^1.3.1",
			"file-loader": "^0.8.5",
			"git-rev": "^0.2.1",
			"jasmine-core": "^2.4.1",
			"jasmine-expect": "^2.0.2",
			"jasmine-promise-matchers": "^2.0.2",
			"json-loader": "^0.5.4",
			"karma": "^0.13.22",
			"karma-babel-preprocessor": "^6.0.1",
			"karma-bamboo-reporter": "^0.1.2",
			"karma-coverage": "^0.5.5",
			"karma-jasmine": "^0.3.8",
			"karma-mocha": "^0.2.2",
			"karma-mocha-reporter": "^2.0.0",
			"karma-phantomjs-launcher": "^1.0.0",
			"karma-sourcemap-loader": "^0.3.7",
			"karma-webpack": "^1.7.0",
			"mocha": "^2.4.5",
			"mocha-bamboo-reporter": "^1.1.0",
			"npm": "^3.8.5",
			"path-exists": "^2.1.0",
			"phantomjs-prebuilt": "^2.1.6",
			"protractor": "^3.2.2",
			"webdriver-manager": "^9.0.0",
			"webpack": "^1.12.14",
			"webpack-bower-resolver": "0.0.1",
			"webpack-node-externals": "^1.0.0"
		},
		"devDependencies": {
			"chai": "^3.5.0",
			"codecov": "^1.0.1"
		}
	};

/***/ }
/******/ ]);