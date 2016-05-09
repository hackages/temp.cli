/**
 * CLI tools: Starting a live-server instance
 **/
import cliparse from 'cliparse';
import exec from './exec';
import config from '../config/configuration';

const { command, args } = config.liveCMD;

const liveCMD = cliparse.command('live', {
  description: 'Starting local server on port 8000',
},
exec.bind(null, command, args));

export default liveCMD;
