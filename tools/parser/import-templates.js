/**
 * CLI tools: Import all templates
 **/
import cliparse from 'cliparse';
import { importItems } from './base-import';
import config from '../config/configuration';

export const configuration = {
  items: `${config.context}/containers/*/templates/`,
  toZip: [
    'templates',
    'model.xml',
    'info.json',
    'icon.png',
    'config.xml',
    'xml',
  ].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-templates', {
  description: 'Import all templates',
},
importItems.bind(null, configuration));

export default cmd;

