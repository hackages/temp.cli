import watch from './webpack.watch';
import run from './webpack.run';
import prod from './webpack.prod';

export default function webpack(params) {
  if (params.options.prod) {
    prod();
  } else if (params.options.watch) {
    watch();
  } else {
    run();
  }
}
