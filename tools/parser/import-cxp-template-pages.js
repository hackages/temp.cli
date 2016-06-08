/**
 * CLI tools: Import all cxp features
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { zipImport } from '../config/utils';

export const configuration = {
  items: `${config.context}/cxp-template-page`,
  toZip: ['.'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-features', {
  description: 'Import all cxp features',
},
zipImport.bind(null, configuration));

export default cmd;
