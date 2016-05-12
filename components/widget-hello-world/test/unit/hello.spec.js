
describe('Testing hello world widget', function(){
  function Controller () {
    this.message = 'Hello World';
  }

  angular.module('app', []).controller('MainCtrl', Controller);

  beforeEach(angular.mock.module('app'));

  describe('hello world widget',() => {
    var vm = new Controller();

    it('should be a text', function() {
      expect(vm.message).toBe('Hello World');
    });
  });
});

