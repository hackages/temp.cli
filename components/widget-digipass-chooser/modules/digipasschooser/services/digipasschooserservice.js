digipassChooserService.$inject = ['$http'];
/**
 * digipassChooser Service
 * @ngInject
 */
function digipassChooserService($http) {

  function getLoginData() {
    return $http.get('/auth/logon')
      .then(function (response) {
        return response.data;
      });
  }

  return {
    getLoginData
  }
}

let module = angular.module('digipassChooserService', []).factory('digipassChooserService', digipassChooserService);
export default module.name;

