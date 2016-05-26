import angular from 'angular/index.js';
import identificationCodeTemplate from './identification-code.html';

function identificationCodeDirective() {
  return {
    restrict: 'EA',
    template: identificationCodeTemplate,
  };
}

const module = angular.module('crelan.identificationCodeDirective', [])
  .directive('identificationCode', identificationCodeDirective);
export default module.name;
