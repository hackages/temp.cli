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
}
AccountsOverviewService.$inject = ['$http'];

const module = angular.module('crelan.accounts.service', [])
    .service('AccountsOverviewService', AccountsOverviewService);
export default module.name;

