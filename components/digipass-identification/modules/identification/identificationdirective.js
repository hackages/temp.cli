import angular from 'angular/index.js';
import identificationTemplate from './identification.html';
import identificationcode from './identification-code/identificationcodedirective';
import serialnumber from './identification-serialnumber/serialnumberdirective';
console.log('identificationDirective', identificationTemplate);

function identificationDirective(){
  return {
    restrict: 'EA',
    template: identificationTemplate
  }
}
let module = angular.module('crelan.identificationDirective', [identificationcode, serialnumber])
  .directive('identification', identificationDirective);
export default module.name;

