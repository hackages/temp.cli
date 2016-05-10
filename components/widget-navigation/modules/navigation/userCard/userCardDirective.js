import angular from 'angular/index.js';
import userCardTemplate from './userCard.html';

let module = angular.module('userCardDirective', []).directive('userCard', userCardDirective);
export default module.name;

function userCardDirective (){
  return {
    restrict: 'EA',
    template: userCardTemplate
  }
}