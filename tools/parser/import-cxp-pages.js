/**
 * CLI tools: Import all cxp pages
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { importItems } from './base-import';

export const configuration = {
  items: `${config.context}/cxp-pages/*`,
  toZip: ['*'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-cxp-pages', {
  description: 'Import all cxp pages',
},
importItems.bind(null, configuration));

export default cmd;
