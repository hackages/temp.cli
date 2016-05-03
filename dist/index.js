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

	var _ci = __webpack_require__(1);

	var _ci2 = _interopRequireDefault(_ci);

	var _deploy = __webpack_require__(19);

	var _deploy2 = _interopRequireDefault(_deploy);

	var _karma = __webpack_require__(20);

	var _karma2 = _interopRequireDefault(_karma);

	var _linter = __webpack_require__(21);

	var _linter2 = _interopRequireDefault(_linter);

	var _version = __webpack_require__(24);

	var _version2 = _interopRequireDefault(_version);

	var _webpack = __webpack_require__(26);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _watchFiles = __webpack_require__(30);

	var _watchFiles2 = _interopRequireDefault(_watchFiles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: Command line tool
	**/


	var cliParser = _cliparse2.default.cli({
	  name: 'crelan <command> [options]',
	  description: 'Speed up your development process using Crelan CLI',
	  commands: [_webpack2.default, _linter2.default, _watchFiles2.default, _ci2.default, _karma2.default, _deploy2.default],
	  version: (0, _version2.default)()
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

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _karmaRunner = __webpack_require__(3);

	var _karmaRunner2 = _interopRequireDefault(_karmaRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: Generate report for Continuous Integration
	**/


	var ciCMD = _cliparse2.default.command('ci', {
	  description: 'Generate mocha.json and report for continuous integration'
	}, _karmaRunner2.default.bind(null, { options: { ci: true } }));

	exports.default = ciCMD;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("cliparse");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _karma = __webpack_require__(5);

	var _karma2 = _interopRequireDefault(_karma);

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _karmaConf = __webpack_require__(14);

	var _karmaConf2 = _interopRequireDefault(_karmaConf);

	var _karmaConf3 = __webpack_require__(15);

	var _karmaConf4 = _interopRequireDefault(_karmaConf3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testRunner = function testRunner(params) {
	  return new Promise(function (resolve, reject) {
	    var _params$options = params.options;
	    var watch = _params$options.watch;
	    var ci = _params$options.ci;


	    var options = {
	      configFile: _path2.default.resolve(__dirname, _karmaConf2.default),
	      webpack: _webpack2.default,
	      singleRun: !watch,
	      reporterOptionsOuput: _path2.default.resolve(process.cwd(), 'mocha.json')
	    };

	    if (ci) {
	      options = Object.assign(options, _karmaConf4.default);
	    }

	    // Start the server and run the tests
	    new _karma2.default.Server(options, function (exitCode) {
	      if (exitCode > 0) {
	        reject(new Error('Hey, something really bad happened with your tests'));
	      } else {
	        resolve();
	      }
	    }).start();

	    return resolve();
	  });
	};

	exports.default = testRunner;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("karma");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _bowerWebpackPlugin = __webpack_require__(8);

	var _bowerWebpackPlugin2 = _interopRequireDefault(_bowerWebpackPlugin);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var exclude = ['node_modules', 'bower_components'];

	var webpackConfig = {
	  devtool: 'source-map',
	  entry: _configuration2.default.mainEntry,
	  output: {
	    filename: 'index.js',
	    path: _configuration2.default.outputDir
	  },
	  resolveLoader: {
	    fallback: _configuration2.default.nodeModules
	  },
	  resolve: {
	    extensions: ['', '.jsx', '.js', '.html', '.css']
	  },
	  stats: {
	    chunks: false, // removed noise made by webpack while transpiling
	    colors: true, // green color, yeah green is good
	    timings: true
	  },
	  module: {
	    loaders: [{
	      test: /\.(js|jsx)$/,
	      loader: 'babel',
	      exclude: /(node_modules|bower_components)/,
	      plugins: ['transform-async-to-generator'],
	      query: {
	        presets: [_path2.default.join(_configuration2.default.nodeModules, 'babel-preset-es2015'), _path2.default.join(_configuration2.default.nodeModules, 'babel-preset-react'), _path2.default.join(_configuration2.default.nodeModules, 'babel-preset-stage-0')]
	      }
	    }, {
	      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
	      loader: 'url',
	      query: {
	        name: '[hash].[ext]',
	        limit: 10000
	      }
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }, {
	      test: /\.css$/,
	      loaders: ['style', 'css', 'autoprefixer'],
	      exclude: exclude
	    }, {
	      test: /\.html$/,
	      loader: 'html!html-minify',
	      exclude: exclude
	    }]
	  },
	  plugins: [new _webpack2.default.ResolverPlugin(new _webpack2.default.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new _bowerWebpackPlugin2.default({
	    modulesDirectories: ['bower_components'],
	    manifestFiles: 'bower.json',
	    includes: /\.js$/,
	    searchResolveModulesDirectories: true
	  })]
	};

	exports.default = webpackConfig;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("bower-webpack-plugin");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _utils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cwd = process.cwd();

	var config = {
	  outputDir: _path2.default.join(cwd, 'dist'),
	  mainEntry: (0, _utils.entry)(),
	  nodeModules: _path2.default.join(__dirname, '../node_modules'),
	  bowerComponents: _path2.default.join(cwd, 'bower_components'),
	  context: cwd
	};

	config.npmCMD = config.nodeModules + '/npm/bin/npm-cli.js';
	config.liveCMD = config.nodeModules + '/live-server/live-server.js';
	config.deployCMD = config.nodeModules + '/surge/lib/cli.js';

	exports.default = config;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.entry = undefined;

	var _fs = __webpack_require__(11);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _pathExists = __webpack_require__(12);

	var _pathExists2 = _interopRequireDefault(_pathExists);

	var _shelljs = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cwd = process.cwd();

	var getPath = function getPath(file) {
	  var content = _fs2.default.readFileSync(file, 'utf-8');
	  return JSON.parse(content).main;
	};

	// this use index.js by default but you can change that by defining
	// the entry point inside your package.json
	var entry = exports.entry = function entry() {
	  var main = _path2.default.resolve(cwd, 'package.json'); // entry defined inside package.json
	  var index = _path2.default.resolve(cwd, 'index.js');

	  if (_pathExists2.default.sync(index)) {
	    return index;
	  }

	  if (_pathExists2.default.sync(main)) {
	    return './' + getPath(main);
	  }

	  // Hey, we need an entry point!! Let's create one for you
	  (0, _shelljs.touch)('index.js');
	  return index;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("path-exists");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("shelljs");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "341bc7debab97fd3f3cab016e5dbf3e4.js";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var context = _path2.default.resolve(process.cwd(), 'report'); // Karma configuration for ci


	var configuration = {
	  coverageReporter: {
	    type: 'lcovonly',
	    dir: context,
	    subdir: '.',
	    file: 'lcov.dat'
	  },
	  reporters: ['progress', 'bamboo', 'coverage'],
	  browsers: ['PhantomJS'],
	  singleRun: true
	};

	exports.default = configuration;

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _child_process = __webpack_require__(18);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: execute native commands using child process
	**/


	var execCMD = function execCMD(command) {
	  return new Promise(function (resolve, reject) {
	    var options = {
	      cwd: _configuration2.default.context,
	      stdio: 'inherit',
	      stdin: 'inherit'
	    };

	    var cmd = (0, _child_process.spawn)('node', [command], options);

	    cmd.stdout.on('data', function (data) {
	      console.log(data);
	      resolve(data);
	    });

	    cmd.stderr.on('data', function (data) {
	      console.log(data);
	      resolve(data);
	    });

	    cmd.on('close', function (code) {
	      console.log('child process exited with code ' + code);
	      reject(code);
	    });
	  });
	};

	exports.default = execCMD;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _exec = __webpack_require__(17);

	var _exec2 = _interopRequireDefault(_exec);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var deployCMD = _cliparse2.default.command('deploy', {
	  description: 'Deploy static assets quickly for immediate feedback'
	}, _exec2.default.bind(null, _configuration2.default.deployCMD)); /**
	                                                                  * Hackages CLI tools: deploy static assets with surge
	                                                                  **/


	exports.default = deployCMD;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _karmaRunner = __webpack_require__(3);

	var _karmaRunner2 = _interopRequireDefault(_karmaRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CLI tools: Testing with Karma
	 **/


	var testCMD = _cliparse2.default.command('test', {
	  description: 'Running unit tests with Karma',
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, _karmaRunner2.default);

	exports.default = testCMD;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _eslintRunner = __webpack_require__(22);

	var _eslintRunner2 = _interopRequireDefault(_eslintRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: Linter configuration
	**/


	var lintCMD = _cliparse2.default.command('lint', {
	  description: 'Lint JS file following airBnB coding guidelines by default',
	  args: [_cliparse2.default.argument('source', {
	    description: 'Files or directory to be parsed'
	  })],
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, _eslintRunner2.default);

	exports.default = lintCMD;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eslint = __webpack_require__(23);

	var _eslint2 = _interopRequireDefault(_eslint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                    * Lint your code all the time and let's write cleaner code
	                                                                                                                                                                                                    **/


	var CLIEngine = _eslint2.default.CLIEngine;

	var linter = function linter(params) {
	  return new Promise(function (resolve) {
	    var cli = new CLIEngine({
	      envs: ['browser', 'node']
	    });

	    var report = cli.executeOnFiles([].concat(_toConsumableArray(params.options.source)));

	    return resolve(CLIEngine.getErrorResults(report.results));
	  });
	};

	exports.default = linter;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("eslint");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _package = __webpack_require__(25);

	var _package2 = _interopRequireDefault(_package);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = function version() {
	  return _package2.default.version;
	}; /**
	   * CLI tools: Return the current version of the CLI
	   **/


	exports.default = version;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
		"name": "cli.crelan",
		"version": "0.0.1",
		"description": "CLI tools to speed up the development process",
		"main": "tools/index.js",
		"scripts": {
			"pretest": "eslint tools",
			"preci": "rm -rf mocha.json && npm i",
			"ci": "mocha -R mocha-bamboo-reporter",
			"test": "mocha test -w",
			"codecov": "mocha -- -R -spec && codecov",
			"lint": "eslint tools",
			"precommit": "npm run lint",
			"build": "webpack --config webpack.config.js",
			"watch": "webpack --config ./webpack.config.js -w",
			"predeploy": "npm run build",
			"deploy": "node publish.js"
		},
		"bin": {
			"crelan": "bin/index.js"
		},
		"keywords": [
			"angular",
			"javascript"
		],
		"author": "Crelan Team",
		"license": "MIT",
		"dependencies": {
			"autoprefixer-loader": "^3.2.0",
			"babel-cli": "^6.6.5",
			"babel-core": "^6.7.4",
			"babel-eslint": "^6.0.2",
			"babel-loader": "^6.2.4",
			"babel-plugin-transform-async-to-generator": "^6.7.4",
			"babel-plugin-transform-runtime": "^6.6.0",
			"babel-polyfill": "^6.7.4",
			"babel-preset-es2015": "^6.6.0",
			"babel-preset-react": "^6.5.0",
			"babel-preset-stage-0": "^6.5.0",
			"babel-register": "^6.7.2",
			"babel-runtime": "^6.6.1",
			"bower-webpack-plugin": "^0.1.9",
			"chai": "^3.5.0",
			"chalk": "^1.1.1",
			"cliparse": "^0.2.5",
			"commander": "^2.9.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.5.3",
			"eslint-config-airbnb": "^6.2.0",
			"eslint-loader": "^1.3.0",
			"eslint-plugin-react": "^4.2.3",
			"estraverse": "^4.2.0",
			"estraverse-fb": "^1.3.1",
			"file-loader": "^0.8.5",
			"git-rev": "^0.2.1",
			"html-loader": "^0.4.3",
			"html-minify-loader": "^1.1.0",
			"husky": "^0.11.4",
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
			"live-server": "^0.9.2",
			"mocha": "^2.4.5",
			"mocha-bamboo-reporter": "^1.1.0",
			"npm": "^3.8.6",
			"path-exists": "^2.1.0",
			"phantomjs-prebuilt": "^2.1.6",
			"protractor": "^3.2.2",
			"raw-loader": "^0.5.1",
			"react": "^15.0.0",
			"react-dom": "^15.0.0",
			"style-loader": "^0.13.1",
			"surge": "^0.17.7",
			"url-loader": "^0.5.7",
			"webpack": "^1.12.14",
			"webpack-bower-resolver": "0.0.1",
			"webpack-node-externals": "^1.0.0"
		},
		"devDependencies": {
			"live-server": "^0.9.2"
		}
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(27);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var buildCMD = _cliparse2.default.command('build', {
	  description: 'Build all your static assets using Webpack',
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch of js files'
	  })]
	}, _webpackRunner2.default);

	exports.default = buildCMD;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(28);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(29);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webpackRunner = function webpackRunner(params) {
	  return params.options.watch ? (0, _webpack2.default)() : (0, _webpack4.default)();
	};

	exports.default = webpackRunner;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(6);

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(6);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(27);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var watchCMD = _cliparse2.default.command('watch', {
	  description: 'Watch files using webpack, babel, eslint'
	}, _webpackRunner2.default.bind(null, { options: { watch: true } }));

	exports.default = watchCMD;

/***/ }
/******/ ]);