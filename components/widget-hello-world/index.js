import account from './modules/account';

angular.module('app', [account]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, ['app']);
});
