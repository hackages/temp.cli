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
        Object.assign(this, allAccounts);
    }).catch((error) => {
        throw error;
    });
};
AccountsOverviewController.$inject = [AccountsOverviewServiceName];
export default AccountsOverviewController;
