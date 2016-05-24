import angular from 'angular/index.js';
import digipassloginTemplate from './digipass-login.html';

const module = angular.module('crelan.digipassLoginDirective', [])
  .directive('digipassLogin', digipassLoginDirective);
export default module.name;

function digipassLoginDirective(){
  return {
    restrict: 'EA',
    template: digipassloginTemplate
  }
}