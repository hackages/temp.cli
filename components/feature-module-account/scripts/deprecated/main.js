/**
 * @deprecated will be removed in LP v0.13.x
 */
define(function (require, exports, module) {

    'use strict';

    module.name = 'module-accounts-deprecated';

    var base = require('base');

    module.exports = base.createModule(module.name, [])
		.factory(require('./scripts/accounts-chart-model'))
		.factory(require('./scripts/assets-model'))
		.factory(require('./scripts/cards-model'))
		.factory(require('./scripts/dynamic-credential-input'))
		.factory(require('./scripts/financial-institute-model'));
});
