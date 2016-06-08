import glob from 'glob';
import cliparse from 'cliparse';
import webpack from '../webpackRunner';
import { logError } from '../config/utils';

const build = () => {
  const index = glob.sync('index.js');
  if (index.length === 0) {
    logError('Move inside a component then run this command again');
    process.exit(1);
  }
  webpack({ options: { watch: true } });
};

const watchCMD = cliparse.command('watch', {
  description: 'Watch files using webpack, babel, eslint',
},
build);

export default watchCMD;
