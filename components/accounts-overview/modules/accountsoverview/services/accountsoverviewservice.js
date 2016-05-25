import angular from 'angular/index.js';
import {forEach} from 'lodash';

/**
 *
 * @param $http
 * @returns {{getAllAccounts: (function())}}
 * @constructor
 */
const AccountsOverviewService = ($http) => {

    /**
     * TODO Ian: Should these come from a constant provider or file?
     */
    const checkingAccountType = "30";
    const savingsAccountType = "32";
    const creditsAccountType = "20";


    /**
     * Retrieves all accounts of the current user.
     * @returns {*}
     */
    const getAllAccounts = () => {
        return $http.get('/portal/accounts/list/all')
            .then(function (response) {
                const allAccounts = {
                    "savingAccounts": [],
                    "checkingAccounts": [],
                    "creditAccounts": []
                };
                forEach(response.data.payload, (account) => {
                    switch (account.accountType) {
                        case checkingAccountType:

                            allAccounts.checkingAccounts.push(account);
                            break;
                        case savingsAccountType:
                            allAccounts.savingAccounts.push(account);
                            break;
                        case creditsAccountType:
                            allAccounts.creditAccounts.push(account);
                            break;
                        default:
                            //TODO Ian: should we add debug logging? Add these to an unknown type?
                            break;
                    }
                });
                return allAccounts;
            });
    };

    return {
        getAllAccounts
    };
};
AccountsOverviewService.$inject = ['$http'];

export const AccountsOverviewServiceName = 'AccountsOverviewService';

const module = angular.module('crelan.accounts.overview.service', [])
    .service(AccountsOverviewServiceName, AccountsOverviewService);
export default module.name;

