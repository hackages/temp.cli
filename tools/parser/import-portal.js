/**
 * CLI tools: Import portal
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { importItems } from './base-import';

export const configuration = {
  items: `${config.context}/cxp-exports/*`,
};

const cmd = cliparse.command('import-portal', {
  description: 'Import portal',
},
importItems.bind(null, configuration));

export default cmd;
