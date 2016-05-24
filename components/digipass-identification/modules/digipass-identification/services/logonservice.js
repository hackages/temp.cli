import angular from 'angular/index.js';

/**
 *
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
    console.log("doLogon",loginInfo);
    loginInfo.digipassType = "Physical";

    return $http.post('/portal/auth/logon', loginInfo)
      .then(function (response) {
        return response.data;
      })
      .catch(()=>{
        //TODO
        throw "not implemented yet";
      });
  };

  return {
    doLogon
  };
};
LogonService.$inject = ['$http'];

export const LogonServiceName = 'LogonService';

const module = angular.module('crelan.identification.service', [])
  .service(LogonServiceName, LogonService);
export default module.name;

