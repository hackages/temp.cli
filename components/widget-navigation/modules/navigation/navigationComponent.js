import angular from 'angular/index.js';
import navigationTemplate from './navigation.html';

let module = angular.module('navigationComponent', [])
  .directive('navigationModule', navigationComponent);
export default module.name;

function navigationComponent(){
  return {
    restrict: 'EA',
    template: navigationTemplate
  }
}