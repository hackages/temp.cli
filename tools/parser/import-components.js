/**
 * CLI tools: Import all components
 **/
import cliparse from 'cliparse';
import { importItems } from './base-import';
import config from '../config/configuration';

export const configuration = {
  items: `${config.context}/components/*`,
  toZip: [
    '*',
  ].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-components', {
  description: 'Import all components',
},
importItems.bind(null, configuration));

export default cmd;
