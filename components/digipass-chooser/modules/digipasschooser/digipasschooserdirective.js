import angular from 'angular/index.js';
import digipassTemplate from './digipass.html';

let module = angular.module('crelan.digipassChooserDirective', [])
  .directive('digipassChooser', digipassChooserDirective);
export default module.name;

function digipassChooserDirective(){
  return {
    restrict: 'EA',
    template: digipassTemplate
  }
}