import angular from 'angular/index.js';

/**
 *
 * @param $http
 * @returns {{getAllAccounts: (function())}}
 * @constructor
 */
const AccountsOverviewService = ($http) => {

    /**
     * Retrieves all accounts of the current user.
     * @returns {*}
     */
    const getAllAccounts = () => {
        return $http.get('/portal/accounts/list/all')
            .then(function (response) {
                return response.data;
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

