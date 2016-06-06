/**
* CLI tools: Command line tool
**/
import ci from './ci';
import live from './live';
import karma from './karma';
import eslint from './linter';
import version from './version';
import webpack from './webpack';
import cliparse from 'cliparse';
import watchFiles from './watchFiles';
import bootstrap from './bootstrap';
import check from './check-server';
import buildAll from './build-all';
import cleanDist from './clean-dist';
import importAll from './import';
import importContainer from './import-container';
import importTemplates from './import-templates';
import importComponents from './import-components';
import importFeatures from './import-features';

const cliParser = cliparse.cli({
  name: 'crelan <command> [options]',
  description: 'Speed up your development process using Crelan CLI',
  commands: [
    webpack,
    watchFiles,
    ci,
    karma,
    bootstrap,
    live,
    eslint,
    check,
    buildAll,
    cleanDist,
    importAll,
    importContainer,
    importTemplates,
    importComponents,
    importFeatures,
  ],
  version: version(),
});

cliparse.parse(cliParser);

export default cliParser;
