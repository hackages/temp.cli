/**
 * CLI tools: Import themes
 **/
import cliparse from 'cliparse';
import config from '../config/configuration';
import { importItems } from './base-import';

export const configuration = {
  items: `${config.context}/themes/crelan-private`,
  toZip: [
    'dist',
    'model.xml',
  ].join(' '),
  target: '.',
};

const cmd = cliparse.command('import-themes', {
  description: 'Import themes',
},
importItems.bind(null, configuration));

export default cmd;
