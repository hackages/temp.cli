import helloWorld from './modules/helloworld';

angular.module('helloWorldApp', [helloWorld]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, ['helloWorldApp']);
});