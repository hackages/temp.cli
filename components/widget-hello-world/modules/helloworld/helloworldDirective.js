import angular from 'angular/index.js';
import helloWorldTemplate from './helloWorld.html';
import HelloWorldCtrl from './HelloWorldCtrl';
import helloWorldService from './services/HelloWorldService';

let module = angular.module('helloWorldDirective', [helloWorldService])
  .directive('helloWorld', helloWorldDirective);
export default module.name;

function helloWorldDirective(){
  return {
    restrict: 'EA',
    template: helloWorldTemplate,
    scope: {},
    controller: HelloWorldCtrl,
    controllerAs: 'hwCtrl'
  }
}