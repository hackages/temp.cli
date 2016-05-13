import helloWorld from './modules/helloworld';
import mocks from './mocks';

angular.module('helloWorldApp', [helloWorld, mocks]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, ['helloWorldApp']);
});