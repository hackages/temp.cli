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

	var _karma = __webpack_require__(21);

	var _karma2 = _interopRequireDefault(_karma);

	var _linter = __webpack_require__(22);

	var _linter2 = _interopRequireDefault(_linter);

	var _version = __webpack_require__(23);

	var _version2 = _interopRequireDefault(_version);

	var _buildModule = __webpack_require__(25);

	var _buildModule2 = _interopRequireDefault(_buildModule);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _watchModule = __webpack_require__(32);

	var _watchModule2 = _interopRequireDefault(_watchModule);

	var _bootstrap = __webpack_require__(33);

	var _bootstrap2 = _interopRequireDefault(_bootstrap);

	var _checkServer = __webpack_require__(34);

	var _checkServer2 = _interopRequireDefault(_checkServer);

	var _buildAll = __webpack_require__(36);

	var _buildAll2 = _interopRequireDefault(_buildAll);

	var _cleanDist = __webpack_require__(37);

	var _cleanDist2 = _interopRequireDefault(_cleanDist);

	var _importAll = __webpack_require__(38);

	var _importAll2 = _interopRequireDefault(_importAll);

	var _importAllDev = __webpack_require__(46);

	var _importAllDev2 = _interopRequireDefault(_importAllDev);

	var _importItem = __webpack_require__(48);

	var _importItem2 = _interopRequireDefault(_importItem);

	var _importContainer = __webpack_require__(41);

	var _importContainer2 = _interopRequireDefault(_importContainer);

	var _importTemplates = __webpack_require__(40);

	var _importTemplates2 = _interopRequireDefault(_importTemplates);

	var _importComponents = __webpack_require__(39);

	var _importComponents2 = _interopRequireDefault(_importComponents);

	var _importCxpFeatures = __webpack_require__(43);

	var _importCxpFeatures2 = _interopRequireDefault(_importCxpFeatures);

	var _importCxpPages = __webpack_require__(45);

	var _importCxpPages2 = _interopRequireDefault(_importCxpPages);

	var _importTemplatePages = __webpack_require__(49);

	var _importTemplatePages2 = _interopRequireDefault(_importTemplatePages);

	var _importThemes = __webpack_require__(42);

	var _importThemes2 = _interopRequireDefault(_importThemes);

	var _importPortal = __webpack_require__(50);

	var _importPortal2 = _interopRequireDefault(_importPortal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cliParser = _cliparse2.default.cli({
	  name: 'crelan <command> [options]',
	  description: 'Speed up your development process using Crelan CLI',
	  commands: [_buildModule2.default, _watchModule2.default, _ci2.default, _karma2.default, _bootstrap2.default, _live2.default, _linter2.default, _checkServer2.default, _buildAll2.default, _cleanDist2.default, _importItem2.default, _importContainer2.default, _importTemplates2.default, _importComponents2.default, _importCxpFeatures2.default, _importAll2.default, _importAllDev2.default, _importThemes2.default, _importCxpPages2.default, _importTemplatePages2.default, _importPortal2.default],
	  version: (0, _version2.default)()
	}); /**
	    * CLI tools: Command line tool
	    **/


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

	var _webpackConfig = __webpack_require__(6);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

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
	      webpack: _webpackConfig2.default,
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

	var _utils = __webpack_require__(7);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var exclude = ['node_modules', 'bower_components'];

	var webpackConfig = {
	  devtool: 'source-map',
	  entry: (0, _utils.getEntry)(),
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
	  }
	};

	exports.default = webpackConfig;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getComponents = exports.getEntry = exports.zipImport = exports.getPath = exports.logError = exports.logInfo = undefined;
	exports.getItems = getItems;
	exports.ismodelmissing = ismodelmissing;
	exports.autocreatefeaturemodel = autocreatefeaturemodel;
	exports.getImporter = getImporter;
	exports.zip = zip;
	exports.deleteZip = deleteZip;
	exports.importZips = importZips;
	exports.importZip = importZip;

	var _fs = __webpack_require__(8);

	var _fs2 = _interopRequireDefault(_fs);

	var _del = __webpack_require__(9);

	var _del2 = _interopRequireDefault(_del);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _jxon = __webpack_require__(10);

	var _jxon2 = _interopRequireDefault(_jxon);

	var _glob = __webpack_require__(11);

	var _glob2 = _interopRequireDefault(_glob);

	var _chalk = __webpack_require__(12);

	var _chalk2 = _interopRequireDefault(_chalk);

	var _formattor = __webpack_require__(13);

	var _formattor2 = _interopRequireDefault(_formattor);

	var _pathExists = __webpack_require__(14);

	var _pathExists2 = _interopRequireDefault(_pathExists);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _child_process = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var cwd = process.cwd();

	var logInfo = exports.logInfo = function logInfo(message) {
	  console.log(_chalk2.default.bold.green(message));
	};

	var logError = exports.logError = function logError(message) {
	  console.log(_chalk2.default.bold.red(message));
	};

	var getPath = exports.getPath = function getPath(file) {
	  var content = _fs2.default.readFileSync(file, 'utf-8');
	  return JSON.parse(content).main;
	};

	function getItems(where) {
	  return _glob2.default.sync(where);
	}

	function ismodelmissing(filepath) {
	  var err = false;

	  try {
	    _fs2.default.statsync(filepath);
	  } catch (e) {
	    err = true;
	  }
	  return err;
	}

	function createfeature(name) {
	  return {
	    catalog: {
	      feature: {
	        name: name,
	        contextitemname: '[bbhost]',
	        properties: {
	          property: [{
	            $name: 'title',
	            $label: 'title',
	            $viewhint: 'admin,designmodeonly',
	            value: {
	              $type: 'string',
	              _: name
	            }
	          }]
	        }
	      }
	    }
	  };
	}

	function getxml(itemjson) {
	  _jxon2.default.config({
	    valuekey: '_', // default: 'keyvalue'
	    attrkey: '$', // default: 'keyattributes'
	    attrprefix: '$', // default: '@'
	    lowercasetags: false, // default: true
	    trueisempty: false, // default: true
	    autodate: false, // default: true
	    ignoreprefixednodes: false, // default: true
	    parsevalues: false });

	  // default: true
	  var model = '<?xml version="1.0" encoding="utf-8"?>\' ' + _jxon2.default.jsToString(itemjson);
	  // const model = '<?xml version="1.0" encoding="utf-8"?>' + jxon.jsToString(itemjson);
	  return (0, _formattor2.default)(model, { method: 'xml' });
	}

	function autocreatefeaturemodel(dest) {
	  var name = _path2.default.basename(dest);
	  var feature = createfeature(name);
	  var xml = getxml(feature);
	  _fs2.default.writeFileSync(dest + '/model.xml', xml);
	}

	function getImporter() {
	  var context = process.cwd();
	  var level = 3;
	  var jar = _glob2.default.sync(context + '/tools/*.jar');

	  while (jar.length === 0 && level-- > 0) {
	    context = _path2.default.resolve(context, '..');
	    jar = _glob2.default.sync(context + '/tools/*.jar');
	  }

	  if (jar.length === 0 || jar > 1) {
	    throw new Error('No importer founded. The import failed');
	  }

	  return jar[0];
	}

	function zip(srcPath, item, toZip) {
	  var maxBuffer = _configuration2.default.maxBuffer;

	  var zipCMD = 'cd ' + srcPath + ' && zip -r ' + item + '.zip ' + toZip;
	  logInfo('Zipping of ' + item + '...');
	  (0, _child_process.execSync)(zipCMD, { maxBuffer: maxBuffer });
	  logInfo('Zipping of ' + item + ' is done successfully');
	}

	function deleteZip(file) {
	  // logInfo(`Removing ${path.basename(file)} ...`);
	  return (0, _del2.default)([file]);
	}

	function importZips() {
	  // const { user, password, server, maxBuffer } = config;
	  // const importerPath = tools || 'tools';
	  //
	  // glob(`${importerPath}#<{(|.jar`, (err, importer) => {
	  //   console.log(importer);
	  //   const importCMD =
	  //   `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;
	  //   console.log(importCMD);
	  // glob(`${target}#<{(|.zip`, (error, zips) => {
	  //   zips.forEach(zipFile => {
	  //     const fullPath = path.resolve(`${zipFile}`);
	  //     const item = path.basename(fullPath);
	  //     try {
	  //       logInfo(`Import of ${path.basename(item)} ...`);
	  //       execSync(`${importCMD} -f ${fullPath}`, { maxBuffer });
	  //       logInfo(`Import of ${item} is done successfully`);
	  //     } catch (e) {
	  //       logError(`Error importing ${item}: ${e}`);
	  //       process.exit(1);
	  //     }
	  //   });
	  //   // });
	  // });
	}

	function importZip(zipfile) {
	  var user = _configuration2.default.user;
	  var password = _configuration2.default.password;
	  var server = _configuration2.default.server;
	  var maxBuffer = _configuration2.default.maxBuffer;


	  var importer = getImporter();

	  var importCMD = 'java -jar ' + importer + ' import-package -u ' + user + ' -p ' + password + ' -s ' + server;
	  var fullPath = _path2.default.resolve('' + zipfile);
	  var item = _path2.default.basename(fullPath);

	  try {
	    logInfo('Import of ' + _path2.default.basename(item) + ' ...');
	    (0, _child_process.execSync)(importCMD + ' -f ' + fullPath, { maxBuffer: maxBuffer });
	    logInfo('Import of ' + item + ' is done successfully');
	  } catch (e) {
	    logError('Error importing ' + item + ': ' + e);
	    process.exit(1);
	  }
	}

	var zipImport = exports.zipImport = function zipImport(configuration) {
	  _glob2.default.sync(configuration.items + '/*').forEach(function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dir) {
	      var item;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              item = _path2.default.basename(dir);

	              if (!(_path2.default.extname(dir) !== '.zip')) {
	                _context.next = 4;
	                break;
	              }

	              _context.next = 4;
	              return zip(dir, item, configuration.toZip);

	            case 4:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined);
	    }));

	    return function (_x) {
	      return ref.apply(this, arguments);
	    };
	  }());
	  importZips(configuration.items);
	};

	// this use index.js by default but you can change that by defining
	// the entry point inside your package.json
	var getEntry = exports.getEntry = function getEntry() {
	  var main = _path2.default.resolve(cwd, 'package.json'); // entry defined inside package.json
	  var index = _path2.default.resolve(cwd, 'index.js');

	  if (_pathExists2.default.sync(index)) {
	    return index;
	  }

	  if (_pathExists2.default.sync(main)) {
	    return './' + getPath(main);
	  }

	  // Hey, we need an entry point!! Let's create one for you
	  logError('You might be on the wrong folder...');
	  return process.exit(1);
	};

	var getComponents = exports.getComponents = function getComponents() {
	  var modules = _path2.default.join(cwd, 'components');
	  return _glob2.default.sync(modules + '/*');
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("del");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("jxon");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("glob");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("formattor");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("path-exists");

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

	var cwd = process.cwd();

	var config = {
	  outputDir: _path2.default.join(cwd, 'dist'),
	  maxBuffer: 1024 * 500 * 1024,
	  nodeModules: _path2.default.join(__dirname, '../node_modules'),
	  bowerComponents: _path2.default.join(cwd, 'bower_components'),
	  context: cwd,
	  modules: _path2.default.join(cwd, 'components'),
	  user: 'admin',
	  password: 'admin',
	  server: process.env.BACKBASE_SERVER || 'http://' + process.env.COMPUTERNAME + '.crelan.be:7777/portalserver/'
	};

	// server: process.env.BACKBASE_SERVER || 'http://localhost:7777/portalserver/',
	config.npmCMD = config.nodeModules + '/npm/bin/npm-cli.js';

	config.liveCMD = {
	  args: config.nodeModules + '/live-server/live-server.js',
	  command: 'node'
	};

	config.eslintCMD = {
	  args: _path2.default.join(cwd) + '/*.js',
	  command: config.nodeModules + '/eslint/bin/eslint.js'
	};

	exports.default = config;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a3f63f2d3ac6b2a482b4f34cc306bd2e.js";

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

	var _glob = __webpack_require__(11);

	var _glob2 = _interopRequireDefault(_glob);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _exec = __webpack_require__(20);

	var _exec2 = _interopRequireDefault(_exec);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var live = function live() {
	  var index = _glob2.default.sync('index.html');
	  if (index.length === 0) {
	    (0, _utils.logError)('Move inside a component then run this command again');
	    process.exit(1);
	  }
	  var _config$liveCMD = _configuration2.default.liveCMD;
	  var command = _config$liveCMD.command;
	  var args = _config$liveCMD.args;

	  (0, _exec2.default)(command, args);
	}; /**
	    * CLI tools: Starting a live-server instance
	    **/


	var liveCMD = _cliparse2.default.command('live', {
	  description: 'Starting local server on port 8000'
	}, live);

	exports.default = liveCMD;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _child_process = __webpack_require__(16);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var execCMD = function execCMD(command, args) {
	  return new Promise(function (resolve, reject) {
	    var options = {
	      cwd: _configuration2.default.context,
	      stdio: 'inherit',
	      stdin: 'inherit'
	    };

	    var cmd = (0, _child_process.spawn)(command, [args], options);

	    cmd.stdout.on('data', function (data) {
	      (0, _utils.logError)(data);
	      resolve(data);
	    });

	    cmd.stderr.on('data', function (data) {
	      (0, _utils.logError)(data);
	      resolve(data);
	    });

	    cmd.on('close', function (code) {
	      (0, _utils.logInfo)('child process exited with code ' + code);
	      reject(code);
	    });
	  });
	}; /**
	   * CLI tools: execute native commands using child process
	   **/


	exports.default = execCMD;

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _exec = __webpack_require__(20);

	var _exec2 = _interopRequireDefault(_exec);

	var _configuration = __webpack_require__(15);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _package = __webpack_require__(24);

	var _package2 = _interopRequireDefault(_package);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = function version() {
	  return _package2.default.version;
	}; /**
	   * CLI tools: Return the current version of the CLI
	   **/


	exports.default = version;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
		"name": "crelan-cli",
		"version": "0.1.0",
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
			"start": "npm-run-all --parallel test watch",
			"predeploy": "npm run build",
			"deploy": "node publish.js"
		},
		"bin": {
			"crelan": "bin/index.js"
		},
		"publishConfig": {
			"registry": "http://hn5620.crelan.be:8082/repository/npm-internal/"
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
			"formattor": "0.0.2",
			"git-rev": "^0.2.1",
			"glob": "^7.0.3",
			"html-loader": "^0.4.3",
			"html-minify-loader": "^1.1.0",
			"husky": "^0.11.4",
			"jasmine-core": "^2.4.1",
			"jasmine-expect": "^2.0.2",
			"jasmine-promise-matchers": "^2.0.2",
			"jasmine-sinon": "^0.4.0",
			"json-loader": "^0.5.4",
			"jxon": "^2.0.0-beta.2",
			"karma": "^0.13.22",
			"karma-babel-preprocessor": "^6.0.1",
			"karma-bamboo-reporter": "^0.1.2",
			"karma-coverage": "^0.5.5",
			"karma-jasmine": "^0.3.8",
			"karma-mocha": "^0.2.2",
			"karma-mocha-reporter": "^2.0.0",
			"karma-phantomjs-launcher": "^1.0.0",
			"karma-sinon": "^1.0.5",
			"karma-sourcemap-loader": "^0.3.7",
			"karma-webpack": "^1.7.0",
			"live-server": "^0.9.2",
			"mocha": "^2.4.5",
			"mocha-bamboo-reporter": "^1.1.0",
			"npm": "^3.8.6",
			"npm-run-all": "^2.1.1",
			"path-exists": "^2.1.0",
			"phantomjs-polyfill": "0.0.2",
			"phantomjs-prebuilt": "^2.1.6",
			"protractor": "^3.2.2",
			"raw-loader": "^0.5.1",
			"sinon": "^1.17.4",
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(26);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(27);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(31);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webpackRunner = function webpackRunner(params) {
	  return params.options.watch ? (0, _webpack2.default)() : (0, _webpack4.default)();
	};

	exports.default = webpackRunner;

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

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Watch all the files
	**/
	var watch = function watch() {
	  return new Promise(function (resolve, reject) {
	    var handler = function handler(error, stats) {
	      (0, _utils.logInfo)(stats.toString(_webpack4.default.stats));

	      if (stats.hasErrors()) {
	        return reject(error);
	      }
	      return resolve(stats);
	    };
	    (0, _webpack2.default)(_webpack4.default).watch({}, handler);
	  });
	};

	exports.default = watch;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _utils = __webpack_require__(7);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var exclude = ['node_modules', 'bower_components'];

	var webpackConfig = {
	  devtool: 'source-map',
	  entry: (0, _utils.getEntry)(),
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
	  plugins: [function watchItem() {
	    var _this = this;

	    this.plugin('watch-run', function (watching, callback) {
	      console.log('Begin compile at  ' + new Date());

	      _this.plugin('done', function (watch) {
	        if (watch.hasErrors()) {
	          return;
	        }

	        var context = {
	          fullpath: process.cwd(),
	          toZip: ['dist', 'styles', 'scripts', 'index.html', 'model.xml', 'icon.png'].join(' ')
	        };

	        (0, _baseImport.importItem)(context);
	      });
	      callback();
	    });
	  }]
	};

	exports.default = webpackConfig;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.importItem = undefined;

	var importItem = exports.importItem = function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(context) {
	    var fullpath, toZip, item, zipfile;
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            fullpath = context.fullpath;
	            toZip = context.toZip;
	            item = _path2.default.basename(fullpath);
	            zipfile = fullpath + '/' + item + '.zip';
	            _context2.prev = 4;
	            _context2.next = 7;
	            return zip(fullpath, item, toZip);

	          case 7:
	            _context2.next = 9;
	            return (0, _utils.importZip)(zipfile);

	          case 9:
	            _context2.next = 11;
	            return deleteZip(zipfile);

	          case 11:
	            _context2.next = 17;
	            break;

	          case 13:
	            _context2.prev = 13;
	            _context2.t0 = _context2['catch'](4);

	            (0, _utils.logError)('error while running this command: ' + _context2.t0);
	            process.exit(1);

	          case 17:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this, [[4, 13]]);
	  }));

	  return function importItem(_x3) {
	    return ref.apply(this, arguments);
	  };
	}();

	exports.getItems = getItems;
	exports.getDependencies = getDependencies;
	exports.zip = zip;
	exports.deleteZip = deleteZip;
	exports.importItems = importItems;
	exports.generateModelXml = generateModelXml;

	var _fs = __webpack_require__(8);

	var _fs2 = _interopRequireDefault(_fs);

	var _del = __webpack_require__(9);

	var _del2 = _interopRequireDefault(_del);

	var _glob = __webpack_require__(11);

	var _glob2 = _interopRequireDefault(_glob);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _child_process = __webpack_require__(16);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CLI tools: Zip, Import and delete items
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          **/


	function getItems(where) {
	  return _glob2.default.sync(where);
	}

	function getDependencies() {
	  var deps = ['.'];

	  var infoJson = _glob2.default.sync(process.cwd() + '/info.json');

	  var info = JSON.parse(_fs2.default.readFileSync(infoJson[0], 'utf-8'));

	  deps = _glob2.default.sync(process.cwd() + '/*', { ignore: info.ignore });

	  return deps;
	}

	function zip(srcPath, item) {
	  var toZip = arguments.length <= 2 || arguments[2] === undefined ? ['.'] : arguments[2];
	  var maxBuffer = _configuration2.default.maxBuffer;

	  var zipCMD = 'cd ' + srcPath + ' && zip -r ' + item + '.zip ' + toZip;
	  (0, _utils.logInfo)('Zipping of ' + item + '...');
	  (0, _child_process.execSync)(zipCMD, { maxBuffer: maxBuffer });
	  (0, _utils.logInfo)('Zipping of ' + item + ' is done successfully');
	}

	function deleteZip(file) {
	  // logInfo(`Removing ${path.basename(file)} ...`);
	  return (0, _del2.default)([file]);
	}

	function importItems(configuration) {
	  var _this = this;

	  var items = configuration.items;
	  var toZip = configuration.toZip;

	  getItems(items).forEach(function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(fullpath) {
	      var item, zipfile;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.prev = 0;

	              if (!(_path2.default.extname(fullpath) === '.zip')) {
	                _context.next = 5;
	                break;
	              }

	              _context.next = 4;
	              return (0, _utils.importZip)(fullpath);

	            case 4:
	              return _context.abrupt('return');

	            case 5:
	              item = _path2.default.basename(fullpath);
	              zipfile = fullpath + '/' + item + '.zip';

	              // await generateModelXml(fullpath);

	              _context.next = 9;
	              return zip(fullpath, item, toZip);

	            case 9:
	              _context.next = 11;
	              return (0, _utils.importZip)(zipfile);

	            case 11:
	              _context.next = 13;
	              return deleteZip(zipfile);

	            case 13:
	              _context.next = 19;
	              break;

	            case 15:
	              _context.prev = 15;
	              _context.t0 = _context['catch'](0);

	              (0, _utils.logError)('error while running this command: ' + _context.t0);
	              process.exit(1);

	            case 19:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, _this, [[0, 15]]);
	    }));

	    return function (_x2) {
	      return ref.apply(this, arguments);
	    };
	  }());
	}

	function generateModelXml(dir) {
	  if ((0, _utils.ismodelmissing)(dir)) {
	    (0, _utils.autocreatefeaturemodel)(dir);
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(28);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(29);

	var _webpack4 = _interopRequireDefault(_webpack3);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Create application bundles from the source file
	**/
	var bundle = function bundle() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  return new Promise(function (resolve, reject) {
	    var handler = function handler(error, stats) {
	      (0, _utils.logInfo)(stats.toString(_webpack4.default.stats));

	      if (stats.hasErrors()) {
	        return reject({ err: error });
	      }

	      return resolve(stats);
	    };

	    var configuration = Object.assign(_webpack4.default, config);
	    (0, _webpack2.default)(configuration).run(handler);
	  });
	};

	exports.default = bundle;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _glob = __webpack_require__(11);

	var _glob2 = _interopRequireDefault(_glob);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(26);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var build = function build() {
	  var index = _glob2.default.sync('index.js');
	  if (index.length === 0) {
	    (0, _utils.logError)('Move inside a component then run this command again');
	    process.exit(1);
	  }
	  (0, _webpackRunner2.default)({ options: { watch: true } });
	};

	var watchCMD = _cliparse2.default.command('watch', {
	  description: 'Watch files using webpack, babel, eslint'
	}, build);

	exports.default = watchCMD;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _child_process = __webpack_require__(16);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CLI tools: Bootstrap Backbase portal
	 **/
	var bootstrap = exports.bootstrap = function bootstrap() {
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _request = __webpack_require__(35);

	var _request2 = _interopRequireDefault(_request);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _utils = __webpack_require__(7);

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
/* 35 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buildAll = exports.getComponents = undefined;

	var _glob = __webpack_require__(11);

	var _glob2 = _interopRequireDefault(_glob);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpack = __webpack_require__(31);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CLI tools: Build recursivilely all components
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          **/


	var getComponents = exports.getComponents = function getComponents() {
	  return _glob2.default.sync(_configuration2.default.context + '/components/*');
	};

	var buildAll = exports.buildAll = function buildAll() {
	  var components = getComponents();

	  if (components.length === 0) {
	    (0, _utils.logError)('Please move to the root of your project and run again this command');
	    process.exit(1);
	  }

	  (0, _utils.logInfo)('Build process started...');

	  components.forEach(function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dir) {
	      var entry, output, result;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              entry = _path2.default.join(dir, 'index.js');
	              output = {
	                filename: 'index.js',
	                path: _path2.default.join(dir, 'dist')
	              };
	              _context.prev = 2;
	              _context.next = 5;
	              return (0, _webpack2.default)({ entry: entry, output: output });

	            case 5:
	              result = _context.sent;

	              if (!result.err) {
	                _context.next = 10;
	                break;
	              }

	              throw new Error(result.err);

	            case 10:
	              (0, _utils.logInfo)('Build for ' + _path2.default.basename(dir) + ' done with success');

	            case 11:
	              _context.next = 17;
	              break;

	            case 13:
	              _context.prev = 13;
	              _context.t0 = _context['catch'](2);

	              (0, _utils.logError)('Build for ' + _path2.default.basename(dir) + ' failed: ' + _context.t0);
	              process.exit(1);

	            case 17:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[2, 13]]);
	    }));

	    return function (_x) {
	      return ref.apply(this, arguments);
	    };
	  }());
	};

	var cmd = _cliparse2.default.command('build-all', {
	  description: 'Build all components in one command'
	}, buildAll);

	exports.default = cmd;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	// TODO: add verbose mode to be able to see what is deleted
	// Not necessary to use async/await for the moment

	var cleanDist = function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    var dists;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            (0, _utils.logInfo)('Delete all dist from components');
	            dists = getDists();
	            _context.next = 4;
	            return (0, _del2.default)(dists);

	          case 4:
	            (0, _utils.logInfo)('Operation done with success...');

	          case 5:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function cleanDist() {
	    return ref.apply(this, arguments);
	  };
	}();

	exports.getDists = getDists;

	var _del = __webpack_require__(9);

	var _del2 = _interopRequireDefault(_del);

	var _glob = __webpack_require__(11);

	var _glob2 = _interopRequireDefault(_glob);

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _utils = __webpack_require__(7);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CLI tools: Clean up all the dist folder
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          **/


	function getDists() {
	  return _glob2.default.sync(_configuration2.default.context + '/components/**/dist');
	}

	var cmd = _cliparse2.default.command('clean', {
	  description: 'Clean up all dist folders'
	}, cleanDist);

	exports.default = cmd;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _baseImport = __webpack_require__(30);

	var _importComponents = __webpack_require__(39);

	var _importTemplates = __webpack_require__(40);

	var _importContainer = __webpack_require__(41);

	var _importThemes = __webpack_require__(42);

	var _importCxpFeatures = __webpack_require__(43);

	var _importCxpTemplatePages = __webpack_require__(44);

	var _importCxpPages = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CLI tools: Import all items
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          **/


	var importAll = function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return (0, _baseImport.importItems)(_importCxpFeatures.configuration);

	          case 2:
	            _context.next = 4;
	            return (0, _baseImport.importItems)(_importCxpTemplatePages.configuration);

	          case 4:
	            _context.next = 6;
	            return (0, _baseImport.importItems)(_importCxpPages.configuration);

	          case 6:
	            _context.next = 8;
	            return (0, _baseImport.importItems)(_importComponents.configuration);

	          case 8:
	            _context.next = 10;
	            return (0, _baseImport.importItems)(_importTemplates.configuration);

	          case 10:
	            _context.next = 12;
	            return (0, _baseImport.importItems)(_importContainer.configuration);

	          case 12:
	            _context.next = 14;
	            return (0, _baseImport.importItems)(_importThemes.configuration);

	          case 14:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function importAll() {
	    return ref.apply(this, arguments);
	  };
	}();

	var cmd = _cliparse2.default.command('import-all', {
	  description: 'Import everything, everything...'
	}, importAll);

	exports.default = cmd;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _baseImport = __webpack_require__(30);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/components/*',
	  toZip: ['dist', 'styles', 'scripts', 'index.html', 'model.xml', 'icon.png'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all components
	    **/


	var cmd = _cliparse2.default.command('import-components', {
	  description: 'Import all components'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _baseImport = __webpack_require__(30);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/containers/*/templates/',
	  toZip: ['templates', 'model.xml', 'info.json', 'icon.png', 'config.xml', 'xml'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all templates
	    **/


	var cmd = _cliparse2.default.command('import-templates', {
	  description: 'Import all templates'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _baseImport = __webpack_require__(30);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/containers/*',
	  toZip: ['scripts', 'media', 'styles', 'model.xml', 'config.xml', 'info.json', 'icon.png'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all containers
	    **/


	var cmd = _cliparse2.default.command('import-containers', {
	  description: 'Import all containers'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/themes/crelan-private',
	  toZip: ['dist', 'model.xml'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import themes
	    **/


	var cmd = _cliparse2.default.command('import-themes', {
	  description: 'Import themes'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/cxp-features/*',
	  toZip: ['.'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all cxp features
	    **/


	var cmd = _cliparse2.default.command('import-features', {
	  description: 'Import all cxp features'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/cxp-template-page',
	  toZip: ['.'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all cxp features
	    **/


	var cmd = _cliparse2.default.command('import-features', {
	  description: 'Import all cxp features'
	}, _utils.zipImport.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/cxp-pages/*',
	  toZip: ['.'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all cxp pages
	    **/


	var cmd = _cliparse2.default.command('import-cxp-pages', {
	  description: 'Import all cxp pages'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _utils = __webpack_require__(7);

	var _gitRev = __webpack_require__(47);

	var _gitRev2 = _interopRequireDefault(_gitRev);

	var _baseImport = __webpack_require__(30);

	var _importComponents = __webpack_require__(39);

	var _importTemplates = __webpack_require__(40);

	var _importContainer = __webpack_require__(41);

	var _importThemes = __webpack_require__(42);

	var _importCxpFeatures = __webpack_require__(43);

	var _importCxpTemplatePages = __webpack_require__(44);

	var _importCxpPages = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CLI tools: Import all items
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          **/


	var importAllDev = function importAllDev() {
	  _gitRev2.default.branch(function (branch) {
	    if (branch === 'develop') {
	      importAll();
	    } else {
	      (0, _utils.logInfo)('You can only import components when you are on develop branch!');
	    }
	  });
	};

	var importAll = function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return (0, _baseImport.importItems)(_importCxpFeatures.configuration);

	          case 2:
	            _context.next = 4;
	            return (0, _baseImport.importItems)(_importCxpTemplatePages.configuration);

	          case 4:
	            _context.next = 6;
	            return (0, _baseImport.importItems)(_importCxpPages.configuration);

	          case 6:
	            _context.next = 8;
	            return (0, _baseImport.importItems)(_importComponents.configuration);

	          case 8:
	            _context.next = 10;
	            return (0, _baseImport.importItems)(_importTemplates.configuration);

	          case 10:
	            _context.next = 12;
	            return (0, _baseImport.importItems)(_importContainer.configuration);

	          case 12:
	            _context.next = 14;
	            return (0, _baseImport.importItems)(_importThemes.configuration);

	          case 14:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function importAll() {
	    return ref.apply(this, arguments);
	  };
	}();

	var cmd = _cliparse2.default.command('import-all-dev', {
	  description: 'Import everything, everything...'
	}, importAllDev);

	exports.default = cmd;

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("git-rev");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CLI tools: Import a module
	 **/


	var context = {
	  fullpath: process.cwd(),
	  toZip: ['dist', 'styles', 'scripts', 'index.html', 'model.xml', 'icon.png'].join(' '),
	  target: '.'
	};

	var cmd = _cliparse2.default.command('import', {
	  description: 'Import a individual item'
	}, _baseImport.importItem.bind(null, context));

	exports.default = cmd;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/cxp-template-pages/*',
	  toZip: ['.'].join(' '),
	  target: '.'
	}; /**
	    * CLI tools: Import all template-pages
	    **/


	var cmd = _cliparse2.default.command('import-template-pages', {
	  description: 'Import all template-pages'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configuration = undefined;

	var _cliparse = __webpack_require__(2);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _configuration = __webpack_require__(15);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _baseImport = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configuration = exports.configuration = {
	  items: _configuration2.default.context + '/cxp-export'
	}; /**
	    * CLI tools: Import portal
	    **/


	var cmd = _cliparse2.default.command('import-portal', {
	  description: 'Import portal'
	}, _baseImport.importItems.bind(null, configuration));

	exports.default = cmd;

/***/ }
/******/ ]);