import angular from 'angular/index.js';
import affiliateTemplate from './affiliate.html';



function affiliateComponent(){
    return {
        restrict: 'EA',
        template: affiliateTemplate
    }
}

let module = angular.module('affiliateComponent', [])
    .directive('affiliate', affiliateComponent);
export default module.name;