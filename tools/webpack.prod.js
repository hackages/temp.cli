import webpack from 'webpack';
import { logInfo } from './config/utils';
import webpackConfig from './config/webpack.config.prod';

/**
* Build all files for production
**/
const build = () => new Promise((resolve, reject) => {
  const handler = (error, stats) => {
    logInfo(stats.toString(webpackConfig.stats));

    if (stats.hasErrors()) {
      return reject(error);
    }
    return resolve(stats);
  };
  webpack(webpackConfig).run(handler);
});

export default build;
