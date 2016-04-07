// Karma configuration file;
const path = require('path');
const context = process.cwd();
const nodeModules = path.resolve(__dirname, 'node_modules');

const localDeps = [
  'jasmine-expect/dist/jasmine-matchers.js',
  'jasmine-promise-matchers/dist/jasmine-promise-matchers.js',
].map(file => path.join(nodeModules, file));

// preprocessors configuration
const files = path.resolve(context, 'components/**/test/unit/*.spec.js');

const preprocessors = {};
preprocessors[files] = ['webpack', 'coverage'];

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [files],
    preprocessors: preprocessors,
	webpackMiddleware: {
        noInfo: true,
        stats: {
            colors: true
        }
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
}