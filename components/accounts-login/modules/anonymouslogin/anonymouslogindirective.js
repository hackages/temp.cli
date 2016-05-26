import angular from 'angular/index.js';
import anonymousLoginTemplate from './anonymouslogin.html';

let module = angular.module('crelan.anonymousLogin.anonymousLoginDirective', [])
  .directive('anonymousLogin', anonymousLoginDirective);
export default module.name;

function anonymousLoginDirective(){
  console.log("directive");
  return {
    template: anonymousLoginTemplate
  }
}
