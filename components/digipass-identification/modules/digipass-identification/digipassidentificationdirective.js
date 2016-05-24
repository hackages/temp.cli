import angular from 'angular/index.js';
import ngMessages from 'angular-messages/index.js';
import uiMask from 'angular-ui-mask/index.js';
import digipassIdentificationTemplate from './digipass-identification.html';
import identificationcode from './../identification-code';
import serialnumber from './../identification-serialnumber';
import login from './../login';
import digipassIdentificationController from './digipass-identification-controller';

let module = angular.module('crelan.digipassIdentificationDirective', [ngMessages, uiMask, identificationcode, serialnumber, login])
  .directive('digipassIdentification', digipassIdentificationDirective);
export default module.name;

function digipassIdentificationDirective(){
  return {
    restrict: 'EA',
    template: digipassIdentificationTemplate,
    controller: digipassIdentificationController,
    controllerAs: 'digipassIdentificationCtrl'
  }
}