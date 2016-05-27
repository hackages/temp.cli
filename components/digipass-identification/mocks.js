import angular from 'angular/index.js';
import 'angular-mocks';
import logonFail from './mocks/logon_fail.json';
import logonSuccess from './mocks/logon_success.json';


const logonResponse = (method, url, data, headers, params) => {
  window.arguments = [arguments, method, url, data, headers, params];
  const userCode = (JSON.parse(data)).userCode;
  if ('ERRORS' === userCode) {
    return  [200, logonFail];
  }
  return [200, logonSuccess];
};

const mockConfiguration = ($httpBackend) => {
  $httpBackend.whenPOST('/portal/auth/logon').respond(logonResponse);
  $httpBackend.whenPOST().passThrough();
};


mockConfiguration.$inject = ['$httpBackend'];

const module = angular.module('mocks', ['ngMockE2E'])
    .run(mockConfiguration);

export default module.name;
