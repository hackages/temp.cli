import angular from 'angular/index.js';
import usercardTemplate from './usercard.html';



function usercardComponent(){
    return {
        restrict: 'EA',
        template: usercardTemplate
    }
}

let module = angular.module('usercardComponent', [])
    .directive('userCard', usercardComponent);
export default module.name;