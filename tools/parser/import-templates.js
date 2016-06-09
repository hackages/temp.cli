/**
 * CLI tools: Import all templates
 **/
import cliparse from 'cliparse';
import { importItems } from './base-import';
import config from '../config/configuration';

export const configuration = {
  items: `${config.context}/containers/*/templates/`,
  toZip: ['*'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-templates', {
  description: 'Import all templates',
},
importItems.bind(null, configuration));

export default cmd;
