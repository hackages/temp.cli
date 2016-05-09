/**
 * CLI tools: Starting a live-server instance
 **/
import request from 'request';
import cliparse from 'cliparse';
import { logError, logInfo } from '../config/utils';

const server = 'http://localhost:7777/portalserver/';

const check = () => request.get(server, {
  auth: {
    user: 'admin',
    pass: 'admin',
  },
}, (error, response) => {
  if (error !== null) {
    logError(`The server is not running: ${error}`);
  } else if (response.statusCode === 404) {
    logError(`The server is not running: ${server}`);
  } else {
    logInfo(`The server is running: ${server}`);
  }
});

const cmd = cliparse.command('check-server', {
  description: 'Check if backbase portal is running',
}, check);

export default cmd;
