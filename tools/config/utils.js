import fs from 'fs';
import del from 'del';
import path from 'path';
import jxon from 'jxon';
import glob from 'glob';
import chalk from 'chalk';
import formattor from 'formattor';
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

export function getItems(where) {
  return glob.sync(where);
}

export function ismodelmissing(filepath) {
  let err = false;

  try {
    fs.statsync(filepath);
  } catch (e) {
    err = true;
  }
  return err;
}

function createfeature(name) {
  return {
    catalog: {
      feature: {
        name,
        contextitemname: '[bbhost]',
        properties: {
          property: [
            {
              $name: 'title',
              $label: 'title',
              $viewhint: 'admin,designmodeonly',
              value: {
                $type: 'string',
                _: name,
              },
            },
          ],
        },
      },
    },
  };
}

function getxml(itemjson) {
  jxon.config({
    valuekey: '_',                // default: 'keyvalue'
    attrkey: '$',                 // default: 'keyattributes'
    attrprefix: '$',              // default: '@'
    lowercasetags: false,         // default: true
    trueisempty: false,           // default: true
    autodate: false,              // default: true
    ignoreprefixednodes: false,   // default: true
    parsevalues: false,            // default: true
  });

  const model = `<?xml version="1.0" encoding="utf-8"?>' ${jxon.jsToString(itemjson)}`;
  // const model = '<?xml version="1.0" encoding="utf-8"?>' + jxon.jsToString(itemjson);
  return formattor(model, { method: 'xml' });
}

export function autocreatefeaturemodel(dest) {
  const name = path.basename(dest);
  const feature = createfeature(name);
  const xml = getxml(feature);
  fs.writeFileSync(`${dest}/model.xml`, xml);
}

export function getImporter() {
  let context = process.cwd();
  let level = 3;
  let jar = glob.sync(`${context}/tools/*.jar`);

  while (jar.length === 0 && level-- > 0) {
    context = path.resolve(context, '..');
    jar = glob.sync(`${context}/tools/*.jar`);
  }

  if (jar.length === 0 || jar > 1) {
    throw new Error('No importer founded. The import failed');
  }

  return jar[0];
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

export function importZips() {
  // const { user, password, server, maxBuffer } = config;
  // const importerPath = tools || 'tools';
  //
  // glob(`${importerPath}#<{(|.jar`, (err, importer) => {
  //   console.log(importer);
  //   const importCMD =
  //   `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;
  //   console.log(importCMD);
    // glob(`${target}#<{(|.zip`, (error, zips) => {
    //   zips.forEach(zipFile => {
    //     const fullPath = path.resolve(`${zipFile}`);
    //     const item = path.basename(fullPath);
    //     try {
    //       logInfo(`Import of ${path.basename(item)} ...`);
    //       execSync(`${importCMD} -f ${fullPath}`, { maxBuffer });
    //       logInfo(`Import of ${item} is done successfully`);
    //     } catch (e) {
    //       logError(`Error importing ${item}: ${e}`);
    //       process.exit(1);
    //     }
    //   });
  //   // });
  // });
}

export function importZip(zipfile) {
  const { user, password, server, maxBuffer } = config;

  const importer = getImporter();

  const importCMD = `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;
  const fullPath = path.resolve(`${zipfile}`);
  const item = path.basename(fullPath);

  try {
    logInfo(`Import of ${path.basename(item)} ...`);
    execSync(`${importCMD} -f ${fullPath}`, { maxBuffer });
    logInfo(`Import of ${item} is done successfully`);
  } catch (e) {
    logError(`Error importing ${item}: ${e}`);
    process.exit(1);
  }
}

export const zipImport = (configuration) => {
  glob.sync(`${configuration.items}/*`).forEach(async dir => {
    const item = path.basename(dir);
    if (path.extname(dir) !== '.zip') {
      await zip(dir, item, configuration.toZip);
    }
  });
  importZips(configuration.items);
};

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
  logError('You might be on the wrong folder...');
  return process.exit(1);
};

export const getComponents = () => {
  const modules = path.join(cwd, 'components');
  return glob.sync(`${modules}/*`);
};
