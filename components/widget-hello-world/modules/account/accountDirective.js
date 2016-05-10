import angular from 'angular/index.js';
import accountTemplate from './account.html';

let module = angular.module('accountComponent', [])
  .directive('accountModule', accountComponent);
export default module.name;

function accountComponent(){
  return {
    restrict: 'EA',
    template: accountTemplate
  }
}