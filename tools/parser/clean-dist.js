/**
 * CLI tools: Clean up all the dist folder
 **/
import del from 'del';
import path from 'path';
import glob from 'glob';
import cliparse from 'cliparse';
import { logInfo } from '../config/utils';
import  config from '../config/configuration';

export function getDists() {
  return glob.sync(`${config.context}/components/**/dist`);
}

// TODO: add verbose mode to be able to see what is deleted
// Not necessary to use async/await for the moment
async function cleanDist() {
  logInfo('Delete all dist from components');
  const dists = getDists();
  await del(dists);
  logInfo('Operation done with success...}');
}

const cmd = cliparse.command('clean', {
  description: 'Clean up all dist folders',
},
cleanDist);

export default cmd;
