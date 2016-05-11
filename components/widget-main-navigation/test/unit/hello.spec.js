
describe('Testing hello world', function(){

    function Controller () {
        this.message = 'Hello World';
    }

    angular.module('app', []).controller('MainCtrl', Controller);

    beforeEach(angular.mock.module('app'));

    describe('hello world widget',() => {
        let vm;
        beforeEach(inject(function ($controller) {
            vm = $controller('MainCtrl');
        } ));

        it('should be a text', function() {
            expect(vm.message).toBe('Hello World');
        });
    });
});

