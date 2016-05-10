define(function (require, exports, module) {

    'use strict';


    /**
     * Main Controller
     * @ngInject
     */
    function MainCtrl() {
        var vm = this;

        vm.message = "Hello World";
    }

    exports.MainCtrl = MainCtrl;
});
