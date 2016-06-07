/**
 * CLI tools: Import all items
 **/
import cliparse from 'cliparse';
import { importItems } from './base-import';
import { configuration as components } from './import-components';
import { configuration as templates } from './import-templates';
import { configuration as containers } from './import-container';
// import { configuration as features } from './import-features';

const importAll = async () => {
  await importItems(components);
  await importItems(templates);
  await importItems(containers);
  // await importItems(features);
};

const cmd = cliparse.command('import-all', {
  description: 'Import everything, everything...',
},
importAll);

export default cmd;

