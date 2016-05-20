import angular from 'angular/index.js';
import digipassTemplate from './digipass.html';
import Digipasschoosercontroller from './digipasschoosercontroller';
/*import digipassChooserService from './services/digipasschooserservice';*/

let module = angular.module('crelan.digipassChooserDirective', [/*digipassChooserService*/])
  .directive('digipassChooser', digipassChooserDirective);
export default module.name;

function digipassChooserDirective(){
  return {
    restrict: 'EA',
    template: digipassTemplate,
    scope: {},
    controller: Digipasschoosercontroller
  }
}