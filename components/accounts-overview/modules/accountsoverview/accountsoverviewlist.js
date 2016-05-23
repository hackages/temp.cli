import angular from 'angular/index.js';
import accountsOverviewTemplate from './accountsoverviewlist.html';
import AccountsOverviewController from './accountsoverviewctrl';
import AccountOverviewService from './services/accountsoverviewservice';
import AccountsOverviewCard from './accountsoverviewcard';

const directiveName = 'accountsOverviewList';
/**
 * accountsOverviewList directive to list the accounts
 * @returns {{restrict: string, template, scope: {}, controller: AccountsOverviewController, controllerAs: string}}
 */
const accountsOverviewList = () => {
    return {
        restrict: 'E',
        template: accountsOverviewTemplate,
        scope: {},
        controller: AccountsOverviewController,
        controllerAs: 'accountsCtrl'
    }
};

let module = angular.module('crelan.accounts.overview.list', [AccountOverviewService, AccountsOverviewCard])
    .directive(directiveName, accountsOverviewList);
export default module.name;

