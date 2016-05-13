HelloWorldService.$inject = ['$http'];
/**
 * HelloWorld Service
 * @ngInject
 */
function HelloWorldService($http) {

  function getHelloWorld() {
    return $http.get('/mocks/messages.json')
      .then(function (response) {
        return response.data;
      });
  }

  return {
    getHelloWorld : getHelloWorld
  }
}

let module = angular.module('HelloWorldService', []).factory('HelloWorldService', HelloWorldService);
export default module.name;

