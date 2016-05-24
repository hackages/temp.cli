const path = require('path');
const webpack = require('webpack');

console.log(__dirname);

const config = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  resolveLoader: {
      root: [path.join(__dirname)],
      //fallback: config.nodeModules,
    },
    resolve: {
      extensions: ['', '.jsx', '.js', '.html', '.css'],
    },
    stats: {
      chunks: false, // removed noise made by webpack while transpiling
      colors: true,  // green color, yeah green is good
      timings: true,
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel', 'eslint'],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
          loader: 'url',
          query: {
            name: '[name].[ext]',
            limit: 10000,
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css', 'autoprefixer'],
        },
        {
          test: /\.html$/,
          loader: 'html',
        },
      ],
    }
  };

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
