import path from 'path';
// import fs from 'fs';
import copy from 'copy';
import webpack from 'webpack';
import { getEntry } from './utils';
import config from './configuration';
import baseConfig from './webpack.config.base';

// function getPackageJSON() {
//   return path.resolve(process.cwd(), '../../package.json');
// }
// function getFeatures() {
//   const pJson = getPackageJSON();
//   const dependencies = JSON.parse(fs.readFileSync(pJson, 'utf8')).dependencies;
//   // return Object.keys(dependencies).map(file => path.resolve('../../node_modules', file));
//   // const deps = Object.keys(dependencies);
//   // return deps;
//   return Object.keys(dependencies);
// }

const configuration = {
  entry: {
    index: getEntry(),
    bundle: ['angular', 'lodash', 'angular-messages'],
  },
  output: {
    filename: 'index.js',
    path: config.outputDir,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('bundle', 'crelan.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    function exportBundle() {
      this.plugin('done', () => {
        const bundle = path.resolve(process.cwd(), 'dist/crelan.bundle.js');
        const sourceMap = path.resolve(process.cwd(), 'dist/crelan.bundle.js.map');
        const features = path.resolve(process.cwd(), '../../crelan-features');
        copy.each([bundle, sourceMap], features, (err, files) => {
          console.log(files, ' bundle created');
        });
        console.log('process is done...');
      });
    },
  ],
};

const webpackConfig = Object.assign({}, baseConfig, configuration);

export default webpackConfig;
