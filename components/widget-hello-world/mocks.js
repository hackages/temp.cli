import angular from 'angular/index.js';
import 'angular-mocks';
import messages from './mocks/messages.json';

 let module = angular.module('mocks', ['ngMockE2E'])
  .run(function($httpBackend){
    $httpBackend.whenGET('/mocks/messages.json').respond(messages);

    $httpBackend.whenGET().passThrough();
  });


export default module.name;
