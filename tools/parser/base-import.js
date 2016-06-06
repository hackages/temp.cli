/**
 * CLI tools: Zip, Import and delete items
 **/
import glob from 'glob';
import del from 'del';
import path from 'path';
import { execSync } from 'child_process';
import config from '../config/configuration';
import { logInfo, logError, importZips } from '../config/utils';

export function getItems(where) {
  return glob.sync(where);
}

export function zip(srcPath, item, toZip) {
  const { maxBuffer } = config;
  const zipCMD = `cd ${srcPath} && zip -r ${item}.zip ${toZip}`;
  logInfo(`Zipping of ${item}...`);
  execSync(zipCMD, { maxBuffer });
  logInfo(`Zipping of ${item} is done successfully`);
}

export function deleteZip(file) {
  // logInfo(`Removing ${path.basename(file)} ...`);
  return del([file]);
}

export function importItems(configuration) {
  getItems(configuration.items).forEach(async (dir) => {
    const srcPath = path.resolve(dir);
    const item = path.basename(dir);
    const zipfile = `${srcPath}/${item}.zip`;

    try {
      await zip(srcPath, item, configuration.toZip);
      await importZips(srcPath);
      await deleteZip(zipfile);
    } catch (err) {
      logError(`error while running this command: ${err}`);
      process.exit(1);
    }
  });
}

export async function importItem(context) {
  const { fullpath, toZip } = context;
  const item = path.basename(fullpath);
  const zipfile = `${context}/${item}.zip`;

  try {
    await zip(fullpath, item, toZip);
    // This is ugly: need to be fixed
    await importZips(fullpath, path.join(fullpath, '../../tools'));
    await deleteZip(zipfile);
  } catch (err) {
    logError(`error while running this command: ${err}`);
    process.exit(1);
  }
}
