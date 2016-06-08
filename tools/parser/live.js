/**
 * CLI tools: Starting a live-server instance
 **/
import glob from 'glob';
import cliparse from 'cliparse';
import exec from './exec';
import config from '../config/configuration';
import { logError } from '../config/utils';

const live = () => {
  const index = glob.sync('index.html');
  if (index.length === 0) {
    logError('Move inside a component then run this command again');
    process.exit(1);
  }
  const { command, args } = config.liveCMD;
  exec(command, args);
};

const liveCMD = cliparse.command('live', {
  description: 'Starting local server on port 8000',
},
live);

export default liveCMD;
