import {AccountsOverviewServiceName} from './services/accountsoverviewservice'

/**
 * AccountsOverviewController Controller
 * @ngInject AccountsOverviewService
 */
const AccountsOverviewController = function(AccountsOverviewService) {
    const accountsPromise = AccountsOverviewService.getAllAccounts();
    accountsPromise.then((result) => {
        this.allAccounts =  result.payload;
    }).catch((error) => {
        console.error(error);
        throw error;
    })
};
AccountsOverviewController.$inject = [AccountsOverviewServiceName];
export default AccountsOverviewController;
