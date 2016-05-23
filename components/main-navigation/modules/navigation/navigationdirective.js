import angular from 'angular/index.js';
import navigationTemplate from './navigation.html';



function navigationComponent(){
    return {
        restrict: 'EA',
        template: navigationTemplate
    }
}

let module = angular.module('navigationComponent', [])
    .directive('navigationModule', navigationComponent);
export default module.name;