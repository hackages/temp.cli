/**
 * CLI tools: Import all template-pages
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { importItems } from './base-import';

export const configuration = {
  items: `${config.context}/cxp-template-pages/*`,
  toZip: ['*'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-template-pages', {
  description: 'Import all template-pages',
},
importItems.bind(null, configuration));

export default cmd;
