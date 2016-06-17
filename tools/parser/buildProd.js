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
  webpack({ options: { prod: true } });
};

const watchCMD = cliparse.command('build-prod', {
  description: 'Build for production',
},
build);

export default watchCMD;
