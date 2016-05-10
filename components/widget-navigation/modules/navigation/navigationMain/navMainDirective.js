import angular from 'angular/index.js';
import navMainTemplate from './navMain.html';
import NavMainCtrl from './navMainController';

let module = angular.module('navMainDirective', []).directive('navMain', navMainDirective);
export default module.name;

function navMainDirective(){
  return {
    restrict: 'EA',
    template: navMainTemplate,
    scope: {},
    controller: NavMainCtrl,
    controllerAs: 'navCtrl'
  }
}
