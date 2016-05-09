'use strict';

var _preprocessors;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Karma configuration file;
var path = require('path');
var glob = require('glob');
var context = process.cwd();
var nodeModules = path.resolve(__dirname, '../node_modules');

// maybe it could be a good idea to remove angular from here
// Let's the develper import what he needs
var localDeps = ['angular/angular.js', 'angular-mocks/angular-mocks.js', 'phantomjs-polyfill/bind-polyfill.js'].map(function (file) {
  return path.join(nodeModules, file);
});

var basePath = glob.sync('components/*').length > 0 ? 'components/*/' : '';

var paths = {
  tests: basePath + 'test/**/*.spec.js',
  modules: basePath + 'modules/**/test/**/*.spec.js',
  vendors: basePath + 'dist/common.bundle.js'
};

var testsFolder = [paths.tests].map(function (file) {
  return path.join(context, file);
});

// This line here solve issue: webpackJsonp
// we need to incluce vendors (angular, lodash...)
localDeps.push(path.join(context, paths.vendors));
var files = localDeps.concat(testsFolder);

var reporters = ['mocha', 'coverage'];

// preprocessors configuration
var tests = path.resolve(context, paths.tests);
var modules = path.resolve(context, paths.modules);

// Preprocessors and plugins: webpack and sourcemap
var plugins = ['webpack', 'sourcemap'];
var preprocessors = (_preprocessors = {}, _defineProperty(_preprocessors, modules, plugins), _defineProperty(_preprocessors, tests, plugins), _preprocessors);

module.exports = function (config) {
  config.set({
    quiet: true,
    frameworks: ['jasmine'],
    files: files,
    preprocessors: preprocessors,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },
    reporters: reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};