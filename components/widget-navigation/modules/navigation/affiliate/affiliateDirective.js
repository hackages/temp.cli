import angular from 'angular/index.js';
import affiliateTemplate from './affiliate.html';

let module = angular.module('affiliateDirective', []).directive('affiliate', affiliateDirective);

export default module.name;

function affiliateDirective(){
  return {
    restrict: 'EA',
    template: affiliateTemplate
  }
}