// Karma configuration file;
const path = require('path');
const glob = require('glob');
const context = process.cwd();
const nodeModules = path.resolve(__dirname, '../node_modules');

// maybe it could be a good idea to remove angular from here
// Let's the develper import what he needs
const localDeps = [
  'angular/angular.js',
  'angular-mocks/angular-mocks.js',
  'phantomjs-polyfill/bind-polyfill.js',
].map(file => path.join(nodeModules, file));

const basePath = glob.sync('components/*').length > 0 ? 'components/*/' : '';

const paths = {
  scripts: `${basePath}test/**/*.spec.js`,
  tests: `${basePath}scripts/**/test/**/*.spec.js`,
};

const externaleDeps = [paths.scripts].map(file => path.join(context, file));

const files = localDeps.concat(externaleDeps);

const reporters = ['mocha', 'coverage'];

// preprocessors configuration
const testsFiles = path.resolve(context, paths.scripts);
const scriptsFiles = path.resolve(context, paths.tests);

// Preprocessors and plugins: webpack and sourcemap
const plugins = ['webpack', 'sourcemap'];
const preprocessors = {
  [scriptsFiles]: plugins,
  [testsFiles]: plugins,
};

module.exports = (config) => {
  config.set({
    quiet: true,
    frameworks: ['jasmine'],
    files,
    preprocessors,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
      },
    },
    reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
  });
};
