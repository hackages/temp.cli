import angular from 'angular/index.js';
import mainTemplate from './main.html';
import mainController from './mainController'

function mainComponent(){
    return {
        restrict: 'EA',
        template: mainTemplate,
        controller : mainController,
        controllerAs : 'main'
    }
}

let module = angular.module('mainComponent', [])
    .directive('main', mainComponent)
export default module.name;