import fs from 'fs';
import del from 'del';
import path from 'path';
import glob from 'glob';
import chalk from 'chalk';
import { touch } from 'shelljs';
import shelljs from 'shelljs';
import pathExists from 'path-exists';
const cwd = process.cwd();

export const getPath = (file) => {
  const content = fs.readFileSync(file, 'utf-8');
  return JSON.parse(content).main;
};

// this use index.js by default but you can change that by defining
// the entry point inside your package.json
export const entry = () => {
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

export const logInfo = (message) => {
  console.log(chalk.bold.green(message));
};

export const logError = (message) => {
  console.log(chalk.bold.red(message));
};

export const getComponents = () => {
  const modules = path.join(cwd, 'components');
  return glob.sync(`${modules}/*`);
};

export const clean = (dirs) => {
  const directories = dirs || ['./bower_components', './target/zips'];
  return del(directories);
};

export const zipDist = () => {
  const dirs = getComponents(null);

  if (dirs.length === 0) {
    throw new Error('No Components Found');
  }

  return dirs.map((dir) => {
    const srcPath = path.resolve(dir);
    const item = path.basename(dir);
    const zips = 'target/zips';
    const zipsPath = path.resolve(dir, `${zips}`);
    const fullPath = pathExists.sync(zipsPath) ? zipsPath : path.resolve(dir, `../../${zips}`);

    // const zipCMD = `cd ${srcPath} && zip -r ${path.join(fullPath, item + '.zip')} *`;
    shelljs.cd(srcPath);
    shelljs.exec(`zip -r ${path.join(fullPath, item)}.zip *`);
    shelljs.cd('../..');

    return true;
  });
};

// export const importZips = () => {
//   const user = 'admin';
//   const password = 'admin';
//   const server = "http://localhost:7777/portalserver";
//   const tools = path.join(__dirname, '../scripts');
//
//   return glob(path.resolve(`${tools}#<{(|.jar`), (err, importer) => {
//     const importCMD = `java -jar ${importer}
//     import-package -u ${user} -p ${password} -s ${server}`;
//
//     const zipsPath = path.join(cwd, 'target/zips');
//
//     return glob(`${zipsPath}#<{(|.zip`, (err, zips) => {
//       return zips.map(zip => {
//         const component = path.basename(zip);
//         logInfo(`Importing ${component}`);
//
//         const fullPath = path.resolve(`${zip}`);
//
//         // const response = shelljs.exec(`${importCMD} -f ${fullPath}`);
//         //
//         // logInfo(response.code);
//
//         exec(`${importCMD} -f ${fullPath}`, (error) => {
//           if (error != null) {
//             logError(`error importing packages: ${error}`);
//           } else {
//             logInfo(`Done importing ${component}`);
//           }
//         });
//       });
//     });
//   });
// };
