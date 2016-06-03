import webpack from 'webpack';
import webpackConfig from './config/webpack.config';
import { logInfo } from './config/utils';
/**
* Watch all the files
**/
const watch = () => new Promise((resolve, reject) => {
  const handler = (error, stats) => {
    logInfo(stats.toString(webpackConfig.stats));

    if (stats.hasErrors()) {
      return reject(error);
    }
    return resolve(stats);
  };
  webpack(webpackConfig).watch({}, handler);
});

export default watch;
