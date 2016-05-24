import angular from 'angular/index.js';
import identificationCodeTemplate from './identification-code.html';

let module = angular.module('crelan.identificationCodeDirective', [])
  .directive('identificationCode', identificationCodeDirective);
export default module.name;

function identificationCodeDirective(){
  return {
    restrict: 'EA',
    template: identificationCodeTemplate
  }
}