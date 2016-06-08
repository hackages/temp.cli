/**
 * CLI tools: Import all cxp template pages
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { zipImport } from '../config/utils';

export const configuration = {
  items: `${config.context}/cxp-template-pages`,
  toZip: ['.'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-cxp-template-pages', {
  description: 'Import all cxp template pages',
},
zipImport.bind(null, configuration));

export default cmd;
