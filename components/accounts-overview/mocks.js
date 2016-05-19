import angular from 'angular/index.js';
import 'angular-mocks';
import accounts from './mocks/accountsoverview.json';

const mockConfiguration = ($httpBackend) => {
    $httpBackend.whenGET('/portal/accounts/list/all').respond(accounts);
    $httpBackend.whenGET().passThrough();
};
mockConfiguration.$inject = ['$httpBackend'];

const module = angular.module('mocks', ['ngMockE2E'])
    .run(mockConfiguration);

export default module.name;
