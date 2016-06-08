import path from 'path';
const cwd = process.cwd();

const config = {
  outputDir: path.join(cwd, 'dist'),
  maxBuffer: 1024 * 500 * 1024,
  nodeModules: path.join(__dirname, '../node_modules'),
  bowerComponents: path.join(cwd, 'bower_components'),
  context: cwd,
  modules: path.join(cwd, 'components'),
  user: 'admin',
  password: 'admin',
  server: process.env.BACKBASE_SERVER || `http://${process.env.COMPUTERNAME}.crelan.be:7777/portalserver/`,
  // server: process.env.BACKBASE_SERVER || 'http://localhost:7777/portalserver/',
};

config.npmCMD = `${config.nodeModules}/npm/bin/npm-cli.js`;

config.liveCMD = {
  args: `${config.nodeModules}/live-server/live-server.js`,
  command: 'node',
};

config.eslintCMD = {
  args: `${path.join(cwd)}/*.js`,
  command: `${config.nodeModules}/eslint/bin/eslint.js`,
};

export default config;
