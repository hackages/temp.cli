import path from 'path';
import config from './configuration';

const exclude = ['node_modules', 'bower_components'];

const webpackConfig = {
  devtool: 'source-map',
  resolveLoader: {
    fallback: config.nodeModules,
  },
  stats: {
    chunks: false, // removed noise made by webpack while transpiling
    colors: true,  // green color, yeah green is good
    timings: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        plugins: ['transform-async-to-generator'],
        query: {
          presets: [
            path.join(config.nodeModules, 'babel-preset-es2015'),
            path.join(config.nodeModules, 'babel-preset-react'),
            path.join(config.nodeModules, 'babel-preset-stage-0'),
          ],
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url',
        query: {
          name: '[hash].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer'],
        exclude,
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude,
      },
    ],
  },
};

export default webpackConfig;
