/**
* CLI tools: Command line tool
**/
import ci from './ci';
import karma from './karma';
import eslint from './linter';
import version from './version';
import webpack from './webpack';
import cliparse from 'cliparse';
import watchFiles from './watchFiles';
import bootstrap from './bootstrap';

const cliParser = cliparse.cli({
  name: 'crelan <command> [options]',
  description: 'Speed up your development process using Crelan CLI',
  commands: [
    webpack,
    eslint,
    watchFiles,
    ci,
    karma,
    bootstrap,
  ],
  version: version(),
});

cliparse.parse(cliParser);

export default cliParser;