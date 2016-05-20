import anonymousLogin from './modules/anonymouslogin'

const crelanAccountslogin = 'crelan.accountslogin';

angular.module(crelanAccountslogin, [anonymousLogin]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelanAccountslogin]);
});

