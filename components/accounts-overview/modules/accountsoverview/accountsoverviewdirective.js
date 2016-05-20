import angular from 'angular/index.js';
import accountsOverviewTemplate from './accountsoverview.html';
import AccountsOverviewController from './accountsoverviewctrl';
import AccountOverviewService from './services/accountsoverviewservice';

const directiveName = 'accountsOverview';
/**
 * accountsOverviewDirective
 * @returns {{restrict: string, template, scope: {}, controller: AccountsOverviewController, controllerAs: string}}
 */
const accountsOverviewDirective = function () {
    return {
        restrict: 'E',
        template: accountsOverviewTemplate,
        scope: {},
        controller: AccountsOverviewController,
        controllerAs: 'accountsCtrl'
    }
}

let module = angular.module('crelan.accounts.overview.directive', [AccountOverviewService])
    .directive(directiveName, accountsOverviewDirective);
export default module.name;

