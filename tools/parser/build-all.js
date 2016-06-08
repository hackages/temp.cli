/**
 * CLI tools: Build recursivilely all components
 **/
import glob from 'glob';
import path from 'path';
import cliparse from 'cliparse';
import webpack from '../webpack.run';
import config from '../config/configuration';
import { logInfo, logError } from '../config/utils';

export const getComponents = () => glob.sync(`${config.context}/components/*`);

export const buildAll = () => {
  const components = getComponents();

  if (components.length === 0) {
    logError('Please move to the root of your project and run again this command');
    process.exit(1);
  }

  logInfo('Build process started...');

  components.forEach(async (dir) => {
    const entry = path.join(dir, 'index.js');

    const output = {
      filename: 'index.js',
      path: path.join(dir, 'dist'),
    };

    try {
      const result = await webpack({ entry, output });
      if (result.err) {
        throw new Error(result.err);
      } else {
        logInfo(`Build for ${path.basename(dir)} done with success`);
      }
    } catch (err) {
      logError(`Build for ${path.basename(dir)} failed: ${err}`);
      process.exit(1);
    }
  });
};


const cmd = cliparse.command('build-all', {
  description: 'Build all components in one command',
},
buildAll);

export default cmd;
