'use strict';

import angular from 'angular';

angular.module("app", [])
    .controller("MainCtrl", MainCtrl);

/**
 * Main Controller
 * @ngInject
 */
function MainCtrl() {
  var vm = this;
  vm.message = "Hello World";
}

