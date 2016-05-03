/**
 * CLI tools: Bootstrap Backbase portal
 **/
import cliparse from 'cliparse';
import { spawn } from 'child_process';
import path from 'path';
import config from '../config/configuration';

const bootstrap = () => {
  const fullPath = path.join(__dirname, '../scripts/setup-local.sh');
  const options = {
    cwd: config.context,
    stdio: 'inherit',
    stdin: 'inherit',
  };

  spawn('sh', [fullPath], options);
};

const bootstrapCMD = cliparse.command('bootstrap', {
  description: 'Bootstrap the backbase portal',
},
bootstrap);

export default bootstrapCMD;
