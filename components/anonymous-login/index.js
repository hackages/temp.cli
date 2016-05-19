import anonymousLogin from './modules/anonymouslogin'

const crelanAnonymousLogin = 'crelan.anonymouslogin';

angular.module(crelanAnonymousLogin, [anonymousLogin]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelanAnonymousLogin]);
});