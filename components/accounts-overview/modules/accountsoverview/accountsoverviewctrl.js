import angular from 'angular/index.js'
import {AccountsOverviewServiceName} from './services/accountsoverviewservice'

/**
 * AccountsOverviewController Controller
 * @ngInject AccountsOverviewService
 */
const AccountsOverviewController = function (AccountsOverviewService) {

    this.grid = true;

    this.toggleGridView = () => this.grid = !this.grid;

    const accountsPromise = AccountsOverviewService.getAllAccounts();
    accountsPromise.then((allAccounts) => {
        angular.extend(this, allAccounts);
    }).catch((error) => {
        throw error;
    });

    let staticRoot = window.launchpad ? window.launchpad.staticRoot : '/static';
    this.getIcon = function getIcon(icon) {
        return `${staticRoot}/features/[BBHOST]/icons/dist/icons.svg#${icon}`;
    };
};
AccountsOverviewController.$inject = [AccountsOverviewServiceName];
export default AccountsOverviewController;
