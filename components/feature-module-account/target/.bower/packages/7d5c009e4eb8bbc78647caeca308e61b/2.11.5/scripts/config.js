define(function (require, exports, module) {
    'use strict';

    var utils = require('base').utils;

    // @ngInject
    module.exports = function config($provide) {
        var overrideDirectivesList = [
            'datepicker',
            'daypicker',
            'monthpicker',
            'yearpicker',
            'datepickerPopup',
            'datepickerPopupWrap',

            'dropdown',
            'dropdownToggle',

            'tabset',
            'tab'
        ];

        utils.forEach(overrideDirectivesList, function(directiveName){
            // @ngInject
            $provide.decorator(directiveName + 'Directive', function ($delegate) {
                $delegate.shift();
                return $delegate;
            });
        });
    };
});
