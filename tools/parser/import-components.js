/**
 * CLI tools: Import all components to the a running portal
**/
import cliparse from 'cliparse';
import { zipDist } from '../config/utils';

const cmd = cliparse.command('import-components', {
  description: 'Import all components to the a running portal',
},
zipDist);

export default cmd;
