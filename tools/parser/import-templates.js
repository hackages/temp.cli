/**
 * CLI tools: Import modules, widgets, features, container, templates
 **/
import glob from 'glob';
import del from 'del';
import path from 'path';
import cliparse from 'cliparse';
import { execSync } from 'child_process';
import config from '../config/configuration';
import { logInfo, logError, importZips } from '../config/utils';

export function getTemplates() {
  return glob.sync(`${config.context}/containers/*/templates/`);
}

export function zip(srcPath, item) {
  const { maxBuffer } = config;
  const toZips = [
    'templates',
    'model.xml',
    'config.xml',
    'info.json',
    'icon.png',
    'xml',
  ].join(' ');

  const zipCMD = `cd ${srcPath} && zip -r ${item}.zip ${toZips}`;
  logInfo(`Zipping of ${item}...`);
  execSync(zipCMD, { maxBuffer });
  logInfo(`Zipping of ${item} is done successfully`);
}

export function deleteZip(file) {
  logInfo(`Removing ${path.basename(file)} ...`);
  return del([file]);
}

export function importTemplates(dirs) {
  dirs.forEach(async (dir) => {
    const srcPath = path.resolve(dir);
    const item = path.basename(dir);
    const zipfile = `${srcPath}/${item}.zip`;

    try {
      await zip(srcPath, item);
      await importZips(srcPath);
      await deleteZip(zipfile);
    } catch (err) {
      logError(`error while running this command: ${err}`);
      process.exit(1);
    }
  });
}

const cmd = cliparse.command('import-templates', {
  description: 'Import all templates',
},
importTemplates.bind(null, getTemplates()));

export default cmd;
