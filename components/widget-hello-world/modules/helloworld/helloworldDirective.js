import angular from 'angular/index.js';
import helloWorldTemplate from './helloWorld.html';

let module = angular.module('helloWorldDirective', [])
  .directive('helloWorld', helloWorldDirective);
export default module.name;

function helloWorldDirective(){
  return {
    restrict: 'EA',
    template: helloWorldTemplate
  }
}