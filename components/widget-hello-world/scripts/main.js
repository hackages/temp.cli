'use strict';



angular.module("app", [])
    .directive("clHelloWorld", clHelloWorld)
    .controller("MainCtrl", MainCtrl);


function clHelloWorld() {

    return {
        restrict: 'E',

    };
}

/**
 * Main Controller
 * @ngInject
 */
function MainCtrl() {
    var vm = this;

    vm.message = "Hello World";
}

