import fs from 'fs';
import path from 'path';
import glob from 'glob';
import chalk from 'chalk';
import { touch } from 'shelljs';
import pathExists from 'path-exists';
import config from './configuration';
import { execSync } from 'child_process';

const cwd = process.cwd();

export const logInfo = (message) => {
  console.log(chalk.bold.green(message));
};

export const logError = (message) => {
  console.log(chalk.bold.red(message));
};

export const getPath = (file) => {
  const content = fs.readFileSync(file, 'utf-8');
  return JSON.parse(content).main;
};

export function importZips(target, tools) {
  const { user, password, server, maxBuffer } = config;

  const importerPath = tools || 'tools';

  glob(`${importerPath}/*.jar`, (err, importer) => {
    const importCMD = `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;

    glob(`${target}/*.zip`, (error, zips) => {
      zips.forEach(zip => {
        const fullPath = path.resolve(`${zip}`);
        const item = path.basename(fullPath);
        try {
          logInfo(`Import of ${path.basename(item)} ...`);
          execSync(`${importCMD} -f ${fullPath}`, { maxBuffer });
          logInfo(`Import of ${item} is done successfully`);
        } catch (e) {
          logError(`Error importing ${item}: ${e}`);
          process.exit(1);
        }
      });
    });
  });
}

// this use index.js by default but you can change that by defining
// the entry point inside your package.json
export const getEntry = () => {
  const main = path.resolve(cwd, 'package.json'); // entry defined inside package.json
  const index = path.resolve(cwd, 'index.js');

  if (pathExists.sync(index)) {
    return index;
  }

  if (pathExists.sync(main)) {
    return `./${getPath(main)}`;
  }

  // Hey, we need an entry point!! Let's create one for you
  touch('index.js');
  return index;
};

export const getComponents = () => {
  const modules = path.join(cwd, 'components');
  return glob.sync(`${modules}/*`);
};
