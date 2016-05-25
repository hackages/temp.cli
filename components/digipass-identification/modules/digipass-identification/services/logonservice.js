import angular from 'angular/index.js';

/**
 * @param $http
 * @returns {{doLogon: (function())}}
 * @constructor
 */
const LogonService = ($http) => {
  /**
   * Login for the given credentials.
   * @returns {*}
   */
  const doLogon = (loginInfo) => {
    const postBody = {
      digipassType: 'Physical',
    };
    Object.assign(postBody, loginInfo);

    return $http.post('/portal/auth/logon', postBody)
      .then((response) => response.data)
      .catch(() => {
        // TODO
        throw new Error('Not yet implemented.');
      });
  };

  return {
    doLogon,
  };
};
LogonService.$inject = ['$http'];

export const LogonServiceName = 'LogonService';

const module = angular.module('crelan.identification.service', [])
  .service(LogonServiceName, LogonService);
export default module.name;
