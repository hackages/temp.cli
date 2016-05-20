import directive from './../../modules/accountsoverview/accountsoverviewdirective';

describe('Accounts Overview Directive', function() {
    beforeEach(angular.mock.module(directive));
    let $compile, $rootScope, $httpBackend;
    beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('Replaces the element with the appropriate content', function() {
        $httpBackend.whenGET('/portal/accounts/list/all').respond(200, {"Account": "1"});
        // Compile a piece of HTML containing the directive
        var element = $compile("<accounts-overview></accounts-overview>")($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("All Accounts:");
    });
});
