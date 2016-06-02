/**
* CLI tools: execute native commands using child process
**/
import { spawn } from 'child_process';
import config from '../config/configuration';
import { logInfo, logError } from '../config/utils';

const execCMD = (command, args) => new Promise((resolve, reject) => {
  const options = {
    cwd: config.context,
    stdio: 'inherit',
    stdin: 'inherit',
  };

  const cmd = spawn(command, [args], options);

  cmd.stdout.on('data', (data) => {
    logError(data);
    resolve(data);
  });

  cmd.stderr.on('data', (data) => {
    logError(data);
    resolve(data);
  });

  cmd.on('close', (code) => {
    logInfo(`child process exited with code ${code}`);
    reject(code);
  });
});

export default execCMD;
