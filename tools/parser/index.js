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
import clean from './clean';
import buildAll from './build-all';

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
    clean,
    buildAll,
  ],
  version: version(),
});

cliparse.parse(cliParser);

export default cliParser;
