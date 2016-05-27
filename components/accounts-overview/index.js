import angular from 'angular/index.js';
import accountsOverview from './modules/accountsoverview';
import localeNlBe from 'angular-i18n/nl-be';
import mocks from './mocks';
import svgxuse from 'svgxuse';

const crelanAccountsModule = 'crelan.accounts';
/**
 * Set up the module with the default mocks configuration and the locale.
 */
angular.module(crelanAccountsModule, [accountsOverview, mocks, localeNlBe]);


document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.querySelector('#accounts-overview'), [crelanAccountsModule]);
});