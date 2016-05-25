import angular from 'angular/index.js';
import 'angular-mocks';
import logonInfo from './mocks/logon.json';

const mockConfiguration = ($httpBackend) => {
  $httpBackend.whenPOST('/portal/auth/logon').respond(logonInfo);
  $httpBackend.whenPOST().passThrough();
};
mockConfiguration.$inject = ['$httpBackend'];

const module = angular.module('mocks', ['ngMockE2E'])
    .run(mockConfiguration);

export default module.name;
