import webpack from 'webpack';
import webpackConfig from './config/webpack.config';
import { logInfo } from './config/utils';

/**
* Create application bundles from the source file
**/
const bundle = (config = {}) => new Promise((resolve, reject) => {
  const handler = (error, stats) => {
    logInfo(stats.toString(webpackConfig.stats));

    if (stats.hasErrors()) {
      return reject({ err: error });
    }

    return resolve(stats);
  };

  const configuration = Object.assign(webpackConfig, config);
  webpack(configuration).run(handler);
});

export default bundle;
