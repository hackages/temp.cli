/**
 * CLI tools: Import a module
 **/
import cliparse from 'cliparse';
import { importItem } from './base-import';

const context = {
  fullpath: process.cwd(),
  toZip: ['*'].join(' '),
  target: '.',
};

const cmd = cliparse.command('import', {
  description: 'Import a individual item',
},
importItem.bind(null, context));

export default cmd;
