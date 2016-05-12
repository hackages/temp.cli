import navigation from './modules/navigation';

angular.module('navigationApp', [navigation]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, ['navigationApp']);
});
