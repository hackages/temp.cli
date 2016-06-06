/**
 * CLI tools: Import all cxp features
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { importZips } from '../config/utils';

const configuration = {
  items: `${config.context}/cxp-features`,
  toZip: [].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-features', {
  description: 'Import all cxp features',
},
importZips.bind(null, configuration.items));

export default cmd;
