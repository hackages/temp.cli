import path from 'path';
import { entry } from './utils';

const cwd = process.cwd();

const config = {
  outputDir: path.join(cwd, 'dist'),
  mainEntry: entry(),
  nodeModules: path.join(__dirname, '../node_modules'),
  bowerComponents: path.join(cwd, 'bower_components'),
  context: cwd,
  modules: path.join(cwd, 'components'),
};

config.npmCMD = `${config.nodeModules}/npm/bin/npm-cli.js`;

config.liveCMD = {
  args: `${config.nodeModules}/live-server/live-server.js`,
  command: 'node',
};

config.eslintCMD = {
  // args: `${config.nodeModules}/eslint/bin/eslint.js ${path.join(cwd, 'index.js')}`,
  // args: `-c ${path.join(__dirname, '../.eslintrc')} ${path.join(cwd)}#<{(|.js`,
  args: `${path.join(cwd)}/*.js`,
  command: `${config.nodeModules}/eslint/bin/eslint.js`,
};

export default config;
