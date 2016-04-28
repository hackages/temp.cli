/**
 * a script that creates dist file without using bb cli
 */
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const filter = require('gulp-filter');
const request = require('request');
const gulpsync = require('gulp-sync')(gulp);
const chalk = require('chalk');
const gulputil = require('gulp-util');
const cssnano = require('gulp-cssnano');
const glob = require('glob');
const util = require('util');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const fileExists = require('file-exists');
const walk = require('walk');
const del = require('del');
const _ = require('lodash');
const formattor = require('formattor');
const jxon = require('jxon');
const file = require('gulp-file');
const bowerConfig = require('./bower.json');
const typeList = {};

const logInfo = (message) => {
  console.log(chalk.bold.green(message));
};

const logError = (message) => {
  console.log(chalk.bold.red(message));
};

const paths = {
  libs: 'components/lib',
  features: 'components/features'
};

gulp.task('clean', () => {
  Object.keys(bowerConfig.dependencies).map((dep) => {
    logInfo(dep);
  });
  // return del([paths.lib]);
});

gulp.task('generate-manifest', () => {
  const itemManifest = {};
  const outputString = '';

  function isModelMissing(filePath) {
    const err, stats;

    try {
      stats = fs.statSync(filePath);
    } catch (e) {
      err = true;
    }
    return err;
  }

  function autoCreateFeatureModel(name, dest) {
    const feature = createFeature(name),
    featureXml = getXml(feature);

    saveModelXML(dest, featureXml);
  }

  function saveModelXML(dest, xml) {
    fs.writeFileSync(dest + '/model.xml', xml);
    console.log(dest.slice(dest.lastIndexOf('/') + 1) + ' - added model.xml');
  }

  function createFeature(name) {
    return {
      catalog: {
        feature: {
          name: name,
          contextItemName: '[BBHOST]',
          properties: {
            property: [
              {
                $name: 'title',
                $label: 'Title',
                $viewHint: 'admin,designModeOnly',
                value: {
                  $type: 'string',
                  _: name
                }
              }]
            }
          }
        }
      };
    }

    function getXml(itemJson) {
      jxon.config({
        valueKey: '_',                // default: 'keyValue'
        attrKey: '$',                 // default: 'keyAttributes'
        attrPrefix: '$',              // default: '@'
        lowerCaseTags: false,         // default: true
        trueIsEmpty: false,           // default: true
        autoDate: false,              // default: true
        ignorePrefixedNodes: false,   // default: true
        parseValues: false            // default: true
      });

      const model = '<?xml version="1.0" encoding="UTF-8"?>' + jxon.jsToString(itemJson);
      return formattor(model, {method: 'xml'});
    }

    const dirs = glob.sync('components/*');

    dirs.forEach((dir) => {
      const name = path.basename(dir);
      const type = 'feature';
      const dirPath = path.resolve(dir);
      const filePath = path.join(dirPath, 'model.xml');

      if(!fileExists(filePath)) {
        autoCreateFeatureModel(name, dirPath);
      } else {
        const data = fs.readFileSync(filePath, "utf8");
        type = data.substring(data.indexOf('<catalog>') + 10, data.indexOf('>', data.indexOf('<catalog>') + 10)).replace('<', '').replace(/\r?\n|\r/g).trim();
      }

      if (itemManifest[type]) {
        itemManifest[type].push(name + '.zip');
      } else {
        itemManifest[type] = [name + '.zip'];
      }

      typeList[dirPath] = type;
    });

    if (itemManifest.template) {
      itemManifest.template.map((item) => {
        outputString += item + '\n';
      });
      delete itemManifest.template;
    }

     const data = Object.keys(itemManifest)
          .map( list => itemManifest[list]);

    // return fs.writeFileSync('target/zips/itemManifest.txt', data.join('\n'), 'utf8');
    return file('itemManifest.txt', data.join('\n'), {src: true})
              .pipe(gulp.dest('target/zips'));
});

gulp.task('create-zips', () => {
  const zips = 'target/zips';
  const components = 'components';

  glob(`${components}/*`, (err, paths) => {
    logInfo(`Creating zips folder inside: ${zips}`);
    exec(`mkdir -p ${zips}`);

    paths.map((globPath) => {
      const item = path.basename(globPath);
      const srcPath = path.resolve(globPath);
      const zipsPath = path.resolve(globPath, `../../${zips}/`);
      const zipCMD = `cd ${srcPath} && zip -r ${path.join(zipsPath, item + '.zip *')}`;

      logInfo(`Zipping ${item}`);

      exec(zipCMD, (error) => {
        if (error !== null) {
          logError('exec error: ', error, ' when calling: ', zipCMD);
        }
        logInfo(`${item} has been zipped successfully.`)
      });
    });
  });
});

const server = "http://cn6023.crelan.be:7777/portalserver/";

gulp.task('check-portal', () => {
  return request.get(server, {
    'auth': {
      'user': 'admin',
      'pass': 'admin'
    }
  }, (error, response) => {
    if(error !== null) {
      logError(`The server is not running: ${error}`)
    }
    else if (response.statusCode === 404) {
      logError(`The server is not running: ${server}`)
    } else {
      logInfo(`The server is running: ${server}`);
    }
  });
});

gulp.task('import-zips', () => {
  const user = 'admin';
  const password = 'admin';

  glob(path.resolve('tools/*.jar'), (err, importer) => {
    const importCMD = `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;
    glob('target/zips/*.zip', (err, zips) => {
      zips.map(zip => {
        const component = path.basename(zip);
        logInfo(`Importing ${component}`);

        zip = path.resolve(`${zip}`);
        exec(`${importCMD} -f ${zip}`, (error) => {
          if(error != null) {
            logError(`error importing packages: ${error}`);
          } else {
            logInfo(`Done importing ${component}`);
          }
        });
      });
    });
  });
});

gulp.task('default', gulpsync.sync(['generate-manifest', 'create-zips', 'check-portal', 'import-zips']));
// gulp.task('default', ['generate-manifest', 'create-zips', 'check-portal', 'import-zips']);

// gulp.task('watch-item', () => {
//   logInfo('watch for items an import them when they change');
// });
