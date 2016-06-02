import angular from 'angular/index.js';
import anonymousLoginTemplate from './anonymouslogin.html';

let module = angular.module('crelan.anonymousLogin.anonymousLoginDirective', [])
  .directive('anonymousLogin', anonymousLoginDirective);
export default module.name;

function anonymousLoginDirective(){
  return {
    template: anonymousLoginTemplate,
    controller: function anonymousLoginCtrl() {
      this.getUri = function getUri(to) {
        if (window.b$) {
          return `${window.b$.portal.config.serverRoot}/${window.b$.portal.portalName}/${to}`;
        } else {
          return `/${to}`
        }
      };
    },
    controllerAs: 'anonymousLoginCtrl',
  }
}
