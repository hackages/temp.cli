import helloWorld from './modules/helloWorld';

angular.module('helloWorldApp', [helloWorld]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, ['helloWorldApp']);
});
