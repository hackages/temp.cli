'use strict';
/**
 * a script that creates dist file without using bb cli
 */
const gulp = require('gulp-help')(require('gulp'));
const uglify = require('gulp-uglify');
const pathExists = require('path-exists');
const filter = require('gulp-filter');
const gulpsync = require('gulp-sync')(gulp);
const gulputil = require('gulp-util');
const cssnano = require('gulp-cssnano');
const glob = require('glob');
const util = require('util');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const walk = require('walk');
const del = require('del');
const chalk = require('chalk');
const request = require('request');
const _ = require('lodash');
const formattor = require('formattor');
const jxon = require('jxon');
const file = require('gulp-file');
const shelljs = require('shelljs');
const git = require('git-rev');
const sass = require('gulp-sass');

const server = process.env.BACKBASE_SERVER || `http://${process.env.COMPUTERNAME}.crelan.be:7777/portalserver/`;

const typeList = {};

const logInfo = (message) => {
  console.log(chalk.bold.green(message));
};

const logError = (message) => {
  console.log(chalk.bold.red(message));
  process.exit(1);
};

const getDirs = () => glob.sync('components/*');


gulp.task('clean', function () {
  return del(['./target/zips']);
});

gulp.task('generate-manifest', function () {
  let itemManifest = {};
  let outputString = '';

  function isModelMissing(filePath) {
    let err, stats;

    try {
      stats = fs.statSync(filePath);
    } catch (e) {
      err = true;
    }

    return err;
  }

  function autoCreateFeatureModel(name, dest) {
    let feature = createFeature(name),
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


    var model = '<?xml version="1.0" encoding="UTF-8"?>' + jxon.jsToString(itemJson);
    return formattor(model, {method: 'xml'});
  }

  const dirs = getDirs();

  dirs.forEach((dir) => {
    var name = dir.slice(dir.lastIndexOf('/') + 1);

    var type = 'feature';
    var dirPath = path.resolve(dir);
    var filePath = dirPath + '/model.xml';

    if (isModelMissing(filePath)) {
      autoCreateFeatureModel(name, dirPath);
    } else {
      var data = fs.readFileSync(filePath, "utf8");

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
    itemManifest.template.map(function (item) {
      outputString += item + '\n';
    });

    delete itemManifest.template;
  }

  Object.keys(itemManifest).map(function (list) {
    itemManifest[list].map(function (item) {
      outputString += item + '\n';
    });
  });

  return file('itemManifest.txt', outputString, {src: true}).pipe(gulp.dest('target/zips'));
});



gulp.task('check-portal', () => {
  return request.get(server, {
    'auth': {
      'user': 'admin',
      'pass': 'admin'
    }
  }, (error, response) => {
    if(error !== null) {
      logError(`The server is not running: ${error}`)
    } else if (response.statusCode === 404) {
      logError(`The server is not running: ${server}`)
    } else {
      logInfo(`The server is running: ${server}`);
    }
  });
});

gulp.task('import-zips-dev', () => {
  git.branch(function(branch){
    if (branch === 'develop') {
      importZips();
    } else {
      logInfo('You can only import components when you are on develop branch!');
    }
  });
});

gulp.task('import-zips', () => {
  importZips();
});

const importZips = () => {
  const user = 'admin';
  const password = 'admin';

  glob(path.resolve('tools/*.jar'), (err, importer) => {
    const importCMD = `java -jar ${importer} import-package -u ${user} -p ${password} -s ${server}`;

    glob('target/zips/*.zip', (err, zips) => {
      zips.map(zip => {
        const component = path.basename(zip);
        logInfo(`Importing ${component}`);

        const fullPath = path.resolve(`${zip}`);

        exec(`${importCMD} -f ${fullPath}`, {maxBuffer: 1024 * 500 * 1024}, (error) => {
          if (error != null) {
            logError(`error importing packages: ${error}`);
          } else  {
            logInfo(`Done importing ${component}`);
          }
        });
      });
    });
  });
}

gulp.task('zip-dist', function () {
  getDirs().map((dir) => {
    const srcPath = path.resolve(dir);
    const item = path.basename(dir);
    const zips = 'target/zips';
    const zipsPath = path.resolve(dir, `${zips}`);

    const fullPath = pathExists.sync(zipsPath) ? zipsPath: path.resolve(dir, `../../${zips}`);

    const zipCMD = `cd ${srcPath} && zip -r ${path.join(fullPath, item + '.zip')} . dist styles scripts`;
    console.log(`Executing: ${zipCMD}`);
    exec(zipCMD, {maxBuffer: 1024 * 500 * 1024}, (error) => {
      if (error !== null) {
        logError(`error while running this command: ${zipCMD}: ${error}`);
        process.exit(1);
      } else {
        logInfo(`Zipping of ${item} is done successfully`);
      }
    });
  });
});

gulp.task('sass', () => {
  return gulp.src('themes/crelan-private/**/*.scss')
      .pipe(sass({
        includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets']
      }).on('error', sass.logError))
      .pipe(gulp.dest('./themes/crelan-private/dist'));
});


gulp.task('wait', () => {
  console.log('started waiting');
  setTimeout(()=>{console.log("stopped waiting")}, 10000);
});
