describe('Testing hello world', function(){

  function Controller () {
    console.log('inside controller');
    this.message = 'Hello World';
  }

  angular.module('app', []).controller('MainCtrl', Controller);

  beforeEach(angular.mock.module('app'));

    var vm;
    beforeEach(inject(function ($controller) {
      vm = $controller('MainCtrl');
    } ));

    it('should be a text', function() {
      expect(vm.message).toBe('Hello World');
    });
});

