describe('Testing hello world', function(){
beforeEach(module('app'));

describe('hello world widget',() => {
    var vm;
    beforeEach(inject(function ($controller) {
        vm = $controller('MainCtrl',{});
    } ));

    it('should be a text', function() {
        expect(vm.message).toBe('Hello World');
    });

})
})

