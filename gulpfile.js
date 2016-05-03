/**
 * a script that creates dist file without using bb cli
 */
var gulp = require('gulp-help')(require('gulp'));
var uglify = require('gulp-uglify');
const pathExists = require('path-exists');
var filter = require('gulp-filter');
var gulpsync = require('gulp-sync')(gulp);
var gulputil = require('gulp-util');
var cssnano = require('gulp-cssnano');
var glob = require('glob');
var util = require('util');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var path = require('path');
var fs = require('fs');
var walk = require('walk');
var del = require('del');
const chalk = require('chalk');
const request = require('request');
var _ = require('lodash');
var formattor = require('formattor');
var jxon = require('jxon');
var file = require('gulp-file');

var typeList = {};

const logInfo = (message) => {
  console.log(chalk.bold.green(message));
};

const logError = (message) => {
  console.log(chalk.bold.red(message));
};

const getDirs = () => {
  const libs = glob.sync('bower_components/*');
  const components = glob.sync('components/*');

  return [...libs, ...components];
};

gulp.task('clean', function () {
  return del(['./bower_components', './target/zips']);
});

gulp.task('generate-manifest', function () {
  var itemManifest = {};
  var outputString = '';

  function isModelMissing(filePath) {
    var err, stats;

    try {
      stats = fs.statSync(filePath);
    } catch (e) {
      err = true;
    }

    return err;
  }

  function autoCreateFeatureModel(name, dest) {
    var feature = createFeature(name),
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
  // const server = "http://cn6023.crelan.be:7777/portalserver/";
  const server = "http://localhost:7777/portalserver/";

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

gulp.task('zip-dist', function () {

  const components = glob.sync('components/*');

  components.map((dir) => {
    const srcPath = path.resolve(dir);
    const item = path.basename(dir);
    const zips = 'target/zips';
    const zipsPath = path.resolve(dir, `${zips}`);
    logInfo('zips path: ' +zipsPath);

    const fullPath = pathExists.sync(zipsPath) ? zipsPath: path.resolve(dir, `../../${zips}`);
    logInfo('full path:  '+fullPath);

    const zipCMD = `zip -r ${path.join(fullPath, item + '.zip')} ${srcPath}`;
    logInfo(zipCMD);

    logInfo(`Zipping ${item}`);

    exec(zipCMD,(error) => {
      if (error !== null) {
        logError(`error while running this command: ${zipCMD}`);;
      } else {
        logInfo(`Zipping of ${item} is done successfully`);
      }
    });
  });
});

gulp.task('default', gulpsync.sync(['generate-manifest', 'zip-dist', 'check-portal']));
