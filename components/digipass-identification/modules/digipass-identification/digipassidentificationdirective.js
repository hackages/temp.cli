import angular from 'angular/index.js';
import ngMessages from 'angular-messages/index.js';
import uiMask from 'angular-ui-mask/index.js';
import digipassIdentificationTemplate from './digipass-identification.html';
import identificationcode from './../identification-code';
import serialnumber from './../identification-serialnumber';
import logonService from './services/logonservice';
import logonController from './logoncontroller';
import login from './../login';

const module = angular.module('crelan.digipassIdentificationDirective', [ngMessages, uiMask, identificationcode, serialnumber, login, logonService])
  .directive('digipassIdentification', digipassIdentificationDirective);
export default module.name;

function digipassIdentificationDirective(){
  return {
    restrict: 'EA',
    template: digipassIdentificationTemplate,
    controller: logonController,
    controllerAs: 'logon'
  }
}