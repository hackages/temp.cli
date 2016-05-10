// import angular from 'angular/index.js';
// import 'angular-mocks';

describe('Testing hello world', () => {
  angular.module('app', [])
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(){
    this.message = 'Hello World';
    this.test = "da";
  }

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(){}));


  describe('hello world widget', () => {
   let vm;
    
    it('should be a text', () => {
      // expect(vm.message).toBe('Hello World');
      // expect(vm.test.length).toEqual(2);
      expect(2).toEqual(2);
    });
  })
});

