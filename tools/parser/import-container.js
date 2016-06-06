/**
 * CLI tools: Import modules, widgets, features, container, templates
 **/
import glob from 'glob';
import path from 'path';
import cliparse from 'cliparse';
import pathExists from 'path-exists';
import { execSync } from 'child_process';
import config from '../config/configuration';
import { logInfo, logError } from '../config/utils';

export function getContainers() {
  return glob.sync(`${config.context}/containers/*`);
}

export function zip(dirs) {
  dirs.forEach(dir => {
    const srcPath = path.resolve(dir);
    const item = path.basename(dir);
    const zips = 'target/containers';
    const zipsPath = path.resolve(dir, `${zips}`);

    const fullPath = pathExists.sync(zipsPath) ? zipsPath : path.resolve(dir, `../../${zips}`);

    const toZips = [
      'scripts',
      'media',
      'styles',
      'model.xml',
      'config.xml',
      'info.json',
      'icon.png',
    ].join(' ');

    const zipCMD = `cd ${srcPath} && zip -r ${path.join(fullPath, item + '.zip')} ${toZips}`;
    logInfo(`Executing: ${zipCMD}`);
    try {
      execSync(zipCMD, { maxBuffer: 1024 * 500 * 1024 });
      logInfo(`Zipping of ${item} is done successfully`);
    } catch (err) {
      logError(`error while running this command: ${zipCMD}: ${err}`);
      process.exit(1);
    }
  });
}

export function importZips(target) {
  const { user, password, server } = config;

  glob(path.resolve('tools/*.jar'), (err, importer) => {
    const importCMD = `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;

    glob(`${target}/*.zip`, (error, zips) => {
      zips.forEach(item => {
        const component = path.basename(item);
        logInfo(`Importing ${component}`);

        const fullPath = path.resolve(`${item}`);
        try {
          execSync(`${importCMD} -f ${fullPath}`, { maxBuffer: 1024 * 500 * 1024 });
          logInfo(`Done importing ${component}`);
        } catch (e) {
          logError(`error importing packages: ${e}`);
          process.exit(1);
        }
      });
    });
  });
}

export function importAll() {
  // Gets containers and their templates
  const containers = getContainers();
  // Zips containers and templates
  zip(containers);
  // Import zips to the portal
  importZips('target/containers');
}

const cmd = cliparse.command('import-containers', {
  description: 'Import everything: container, features, templates, widgets',
},
importAll);

export default cmd;
