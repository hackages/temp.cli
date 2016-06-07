/**
 * CLI tools: Import all cxp features
 **/
import cliparse from 'cliparse';
import { importItem } from './base-import';

const context = {
  fullpath: process.cwd(),
  toZip: [
    'dist',
    'styles',
    'scripts',
    'index.html',
    'model.xml',
    'icon.png',
  ].join(' '),
  target: '.',
};

const cmd = cliparse.command('import', {
  description: 'Import all cxp features',
},
importItem.bind(null, context));

export default cmd;