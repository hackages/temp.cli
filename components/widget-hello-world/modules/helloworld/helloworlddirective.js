import angular from 'angular/index.js';
import helloWorldTemplate from './helloworld.html';
import HelloWorldCtrl from './helloworldctrl';
import helloWorldService from './services/helloworldservice';

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