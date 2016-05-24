import {AccountsOverviewServiceName} from './services/accountsoverviewservice'

/**
 * AccountsOverviewController Controller
 * @ngInject AccountsOverviewService
 */
const AccountsOverviewController = function(AccountsOverviewService) {
    this.grid = true;
    const accountsPromise = AccountsOverviewService.getAllAccounts();
    accountsPromise.then((result) => {
        this.allAccounts =  result.payload;
    }).catch((error) => {
        console.error(error);
        throw error;
    })
    this.toggleGridView = () => {
        this.grid = !this.grid;
    }
};
AccountsOverviewController.$inject = [AccountsOverviewServiceName];
export default AccountsOverviewController;
