/**
 * CLI tools: Import all cxp features
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { importItems } from './base-import';

export const configuration = {
  items: `${config.context}/cxp-features/*`,
  toZip: ['.'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-features', {
  description: 'Import all cxp features',
},
importItems.bind(null, configuration));

export default cmd;
