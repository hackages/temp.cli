import angular from 'angular/index.js';
import 'angular-mocks';
import logonData from './mocks/logon.json';

 let module = angular.module('mocks', ['ngMockE2E'])
  .run(function($httpBackend){
    $httpBackend.whenGET('/auth/logon').respond(logonData);

    $httpBackend.whenGET().passThrough();
  });


export default module.name;
