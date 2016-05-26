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

	var _live = __webpack_require__(19);

	var _live2 = _interopRequireDefault(_live);

	var _karma = __webpack_require__(22);

	var _karma2 = _interopRequireDefault(_karma);

	var _linter = __webpack_require__(23);

	var _linter2 = _interopRequireDefault(_linter);

	var _version = __webpack_require__(24);

	var _version2 = _interopRequireDefault(_version);

	var _webpack = __webpack_require__(26);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _watchFiles = __webpack_require__(30);

	var _watchFiles2 = _interopRequireDefault(_watchFiles);

	var _bootstrap = __webpack_require__(31);

	var _bootstrap2 = _interopRequireDefault(_bootstrap);

	var _checkServer = __webpack_require__(32);

	var _checkServer2 = _interopRequireDefault(_checkServer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import importComponents from './import-components';

	/**
	* CLI tools: Command line tool
	**/
	var cliParser = _cliparse2.default.cli({
	  name: 'crelan <command> [options]',
	  description: 'Speed up your development process using Crelan CLI',
	  commands: [_webpack2.default, _linter2.default, _watchFiles2.default, _ci2.default, _karma2.default, _bootstrap2.default, _live2.default, _linter2.default, _checkServer2.default],

	  // importComponents,
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

	var _karmaConf = __webpack_require__(17);

	var _karmaConf2 = _interopRequireDefault(_karmaConf);

	var _karmaConf3 = __webpack_require__(18);

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
	      loader: 'html',
	      exclude: exclude
	    }]
	  },
	  externals: {
	    angular: 'angular'
	  },
	  plugins: [new _webpack2.default.ResolverPlugin(new _webpack2.default.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new _bowerWebpackPlugin2.default({
	    modulesDirectories: ['bower_components'],
	    manifestFiles: 'bower.json',
	    includes: /\.js$/,
	    searchResolveModulesDirectories: true
	  }), new _webpack2.default.optimize.CommonsChunkPlugin('common', 'common.bundle.js')]
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
	  context: cwd,
	  modules: _path2.default.join(cwd, 'components')
	};

	config.npmCMD = config.nodeModules + '/npm/bin/npm-cli.js';

	config.liveCMD = {
	  args: config.nodeModules + '/live-server/live-server.js',
	  command: 'node'
	};

	config.eslintCMD = {
	  // args: `${config.nodeModules}/eslint/bin/eslint.js ${path.join(cwd, 'index.js')}`,
	  // args: `-c ${path.join(__dirname, '../.eslintrc')} ${path.join(cwd)}#<{(|.js`,
	  args: _path2.default.join(cwd) + '/*.js',
	  command: config.nodeModules + '/eslint/bin/eslint.js'
	};

	exports.default = config;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.zipDist = exports.clean = exports.getComponents = exports.logError = exports.logInfo = exports.entry = exports.getPath = undefined;

	var _fs = __webpack_require__(11);

	var _fs2 = _interopRequireDefault(_fs);

	var _del = __webpack_require__(12);

	var _del2 = _interopRequireDefault(_del);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _glob = __webpack_require__(13);

	var _glob2 = _interopRequireDefault(_glob);

	var _chalk = __webpack_require__(14);

	var _chalk2 = _interopRequireDefault(_chalk);

	var _shelljs = __webpack_require__(15);

	var _shelljs2 = _interopRequireDefault(_shelljs);

	var _pathExists = __webpack_require__(16);

	var _pathExists2 = _interopRequireDefault(_pathExists);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cwd = process.cwd();

	var getPath = exports.getPath = function getPath(file) {
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

	var logInfo = exports.logInfo = function logInfo(message) {
	  console.log(_chalk2.default.bold.green(message));
	};

	var logError = exports.logError = function logError(message) {
	  console.log(_chalk2.default.bold.red(message));
	};

	var getComponents = exports.getComponents = function getComponents() {
	  var modules = _path2.default.join(cwd, 'components');
	  return _glob2.default.sync(modules + '/*');
	};

	var clean = exports.clean = function clean(dirs) {
	  var directories = dirs || ['./bower_components', './target/zips'];
	  return (0, _del2.default)(directories);
	};

	var zipDist = exports.zipDist = function zipDist() {
	  var dirs = getComponents(null);

	  if (dirs.length === 0) {
	    throw new Error('No Components Found');
	  }

	  return dirs.map(function (dir) {
	    var srcPath = _path2.default.resolve(dir);
	    var item = _path2.default.basename(dir);
	    var zips = 'target/zips';
	    var zipsPath = _path2.default.resolve(dir, '' + zips);
	    var fullPath = _pathExists2.default.sync(zipsPath) ? zipsPath : _path2.default.resolve(dir, '../../' + zips);

	    // const zipCMD = `cd ${srcPath} && zip -r ${path.join(fullPath, item + '.zip')} *`;
	    _shelljs2.default.cd(srcPath);
	    _shelljs2.default.exec('zip -r ' + _path2.default.join(fullPath, item) + '.zip *');
	    _shelljs2.default.cd('../..');

	    return true;
	  });
	};

	// export const importZips = () => {
	//   const user = 'admin';
	//   const password = 'admin';
	//   const server = "http://localhost:7777/portalserver";
	//   const tools = path.join(__dirname, '../scripts');
	//
	//   return glob(path.resolve(`${tools}#<{(|.jar`), (err, importer) => {
	//     const importCMD = `java -jar ${importer}
	//     import-package -u ${user} -p ${password} -s ${server}`;
	//
	//     const zipsPath = path.join(cwd, 'target/zips');
	//
	//     return glob(`${zipsPath}#<{(|.zip`, (err, zips) => {
	//       return zips.map(zip => {
	//         const component = path.basename(zip);
	//         logInfo(`Importing ${component}`);
	//
	//         const fullPath = path.resolve(`${zip}`);
	//
	//         // const response = shelljs.exec(`${importCMD} -f ${fullPath}`);
	//         //
	//         // logInfo(response.code);
	//
	//         exec(`${importCMD} -f ${fullPath}`, (error) => {
	//           if (error != null) {
	//             logError(`error importing packages: ${error}`);
	//           } else {
	//             logInfo(`Done importing ${component}`);
	//           }
	//         });
	//       });
	//     });
	//   });
	// };

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("del");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("glob");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("shelljs");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("path-exists");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2481bef46b347c68e9352d659498ff13.js";

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _exec = __webpack_require__(20);

	var _exec2 = _interopRequireDefault(_exec);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _config$liveCMD = _configuration2.default.liveCMD; /**
	                                                        * CLI tools: Starting a live-server instance
	                                                        **/

	var command = _config$liveCMD.command;
	var args = _config$liveCMD.args;


	var liveCMD = _cliparse2.default.command('live', {
	  description: 'Starting local server on port 8000'
	}, _exec2.default.bind(null, command, args));

	exports.default = liveCMD;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _child_process = __webpack_require__(21);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: execute native commands using child process
	**/


	var execCMD = function execCMD(command, args) {
	  return new Promise(function (resolve, reject) {
	    var options = {
	      cwd: _configuration2.default.context,
	      stdio: 'inherit',
	      stdin: 'inherit'
	    };

	    var cmd = (0, _child_process.spawn)(command, [args], options);

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
/* 21 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _exec = __webpack_require__(20);

	var _exec2 = _interopRequireDefault(_exec);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _config$eslintCMD = _configuration2.default.eslintCMD; /**
	                                                            * CLI tools: Starting a live-server instance
	                                                            **/

	var command = _config$eslintCMD.command;
	var args = _config$eslintCMD.args;


	var cmd = _cliparse2.default.command('lint', {
	  description: 'Linter for your JavaScript'
	}, _exec2.default.bind(null, command, args));

	exports.default = cmd;

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
		"name": "crelan-cli",
		"version": "0.0.6",
		"description": "CLI tools to speed up the development process",
		"main": "tools/index.js",
		"scripts": {
			"pretest": "eslint tools",
			"prebamboo": "rm -rf mocha.json && npm i",
			"bamboo": "mocha -R mocha-bamboo-reporter",
			"test": "mocha test",
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
		"publishConfig": {
			"registry": "http://hn198.crelan.be:8081/nexus/content/repositories/npm-internal"
		},
		"keywords": [
			"angular",
			"javascript"
		],
		"author": "Crelan Team",
		"license": "MIT",
		"dependencies": {
			"angular": "^1.5.5",
			"angular-mocks": "^1.5.5",
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
			"chalk": "^1.1.3",
			"cliparse": "^0.2.5",
			"commander": "^2.9.0",
			"css-loader": "^0.23.1",
			"del": "^2.2.0",
			"eslint": "^2.9.0",
			"eslint-config-airbnb": "^6.2.0",
			"eslint-loader": "^1.3.0",
			"eslint-plugin-react": "^4.2.3",
			"estraverse": "^4.2.0",
			"estraverse-fb": "^1.3.1",
			"file-loader": "^0.8.5",
			"git-rev": "^0.2.1",
			"glob": "^7.0.3",
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
			"phantomjs-polyfill": "0.0.2",
			"phantomjs-prebuilt": "^2.1.6",
			"protractor": "^3.2.2",
			"raw-loader": "^0.5.1",
			"style-loader": "^0.13.1",
			"surge": "^0.17.7",
			"url-loader": "^0.5.7",
			"webpack": "^1.12.14",
			"webpack-bower-resolver": "0.0.1",
			"webpack-node-externals": "^1.0.0"
		},
		"devDependencies": {
			"request": "^2.72.0",
			"shelljs": "^0.7.0"
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

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _child_process = __webpack_require__(21);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _configuration = __webpack_require__(9);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CLI tools: Bootstrap Backbase portal
	 **/


	var bootstrap = function bootstrap() {
	  var fullPath = _path2.default.join(__dirname, '../scripts/setup-local.sh');
	  var options = {
	    cwd: _configuration2.default.context,
	    stdio: 'inherit',
	    stdin: 'inherit'
	  };

	  (0, _child_process.spawn)('sh', [fullPath], options);
	};

	var bootstrapCMD = _cliparse2.default.command('bootstrap', {
	  description: 'Bootstrap the backbase portal'
	}, bootstrap);

	exports.default = bootstrapCMD;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _request = __webpack_require__(33);

	var _request2 = _interopRequireDefault(_request);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _utils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = 'http://localhost:7777/portalserver/'; /**
	                                                     * CLI tools: Starting a live-server instance
	                                                     **/


	var check = function check() {
	  return _request2.default.get(server, {
	    auth: {
	      user: 'admin',
	      pass: 'admin'
	    }
	  }, function (error, response) {
	    if (error !== null) {
	      (0, _utils.logError)('The server is not running: ' + error);
	    } else if (response.statusCode === 404) {
	      (0, _utils.logError)('The server is not running: ' + server);
	    } else {
	      (0, _utils.logInfo)('The server is running: ' + server);
	    }
	  });
	};

	var cmd = _cliparse2.default.command('check-server', {
	  description: 'Check if backbase portal is running'
	}, check);

	exports.default = cmd;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ }
/******/ ]);