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

const cliParser = cliparse.cli({
  name: 'crelan <command> [options]',
  description: 'Speed up your development process using Crelan CLI',
  commands: [
    webpack,
    eslint,
    watchFiles,
    ci,
    karma,
  ],
  version: version(),
});

cliparse.parse(cliParser);

export default cliParser;
