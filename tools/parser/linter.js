/**
 * CLI tools: Starting a live-server instance
 **/
import cliparse from 'cliparse';
import exec from './exec';
import config from '../config/configuration';

const { command, args } = config.eslintCMD;

const cmd = cliparse.command('lint', {
  description: 'Linter for your JavaScript',
},
exec.bind(null, command, args));

export default cmd;
