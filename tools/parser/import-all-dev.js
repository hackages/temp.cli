/**
 * CLI tools: Import all items
 **/
import cliparse from 'cliparse';
import { logInfo } from '../config/utils';
import git from 'git-rev';
import { importItems } from './base-import';
import { configuration as components } from './import-components';
import { configuration as templates } from './import-templates';
import { configuration as containers } from './import-container';
import { configuration as themes } from './import-themes';
import { configuration as cxpFeatures } from './import-cxp-features';
import { configuration as cxpTemplatePages } from './import-cxp-template-pages';
import { configuration as cxpPages } from './import-cxp-pages';

const importAll = async () => {
  await importItems(cxpFeatures);
  await importItems(cxpTemplatePages);
  await importItems(cxpPages);
  await importItems(components);
  await importItems(templates);
  await importItems(containers);
  await importItems(themes);
};

const importAllDev = () => {
  git.branch((branch) => {
    if (branch === 'develop') {
      importAll();
    } else {
      logInfo('You can only import components when you are on develop branch!');
    }
  });
};


const cmd = cliparse.command('import-all-dev', {
  description: 'Import everything, everything...',
},
importAllDev);

export default cmd;
