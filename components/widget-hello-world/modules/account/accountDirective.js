import angular from 'angular/index.js';
import accountTemplate from './account.html';

let module = angular.module('accountDirective', [])
  .directive('accountModule', accountDirective);
export default module.name;

function accountDirective(){
  return {
    restrict: 'EA',
    template: accountTemplate
  }
}