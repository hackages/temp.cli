/**
 * CLI tools: Zip, Import and delete items
 **/
import fs from 'fs';
import del from 'del';
import glob from 'glob';
import path from 'path';
import { execSync } from 'child_process';
import config from '../config/configuration';
import {
  logInfo,
  logError,
  importZip,
  ismodelmissing,
  autocreatefeaturemodel,
} from '../config/utils';

export function getItems(where) {
  return glob.sync(where);
}

export function getDependencies() {
  let deps = ['.'];

  const infoJson = glob.sync(`${process.cwd()}/info.json`);

  const info = JSON.parse(fs.readFileSync(infoJson[0], 'utf-8'));

  deps = glob.sync(`${process.cwd()}/*`, { ignore: info.ignore });

  return deps;
}

export function zip(srcPath, item, toZip = ['.']) {
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
  const { items, toZip } = configuration;
  getItems(items).forEach(async (fullpath) => {
    try {
      if (path.extname(fullpath) === '.zip') {
        await importZip(fullpath);
        return;
      }

      const item = path.basename(fullpath);
      const zipfile = `${fullpath}/${item}.zip`;

      // await generateModelXml(fullpath);
      await zip(fullpath, item, toZip);
      await importZip(zipfile);
      await deleteZip(zipfile);
    } catch (err) {
      logError(`error while running this command: ${err}`);
      process.exit(1);
    }
  });
}

export function generateModelXml(dir) {
  if (ismodelmissing(dir)) {
    autocreatefeaturemodel(dir);
  }
}

export async function importItem(context) {
  const { fullpath, toZip } = context;
  const item = path.basename(fullpath);
  const zipfile = `${fullpath}/${item}.zip`;

  try {
    // const deps = getDependencies();
    await zip(fullpath, item, toZip);
    await importZip(zipfile);
    await deleteZip(zipfile);
  } catch (err) {
    logError(`error while running this command: ${err}`);
    process.exit(1);
  }
}
