/**
 * CLI tools: Import all containers
 **/
import cliparse from 'cliparse';
import { importItems } from './base-import';
import config from '../config/configuration';

export const configuration = {
  items: `${config.context}/containers/*`,
  toZip: ['*'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-containers', {
  description: 'Import all containers',
},
importItems.bind(null, configuration));

export default cmd;
