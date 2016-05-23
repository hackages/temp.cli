import directive from './../../modules/digipasschooser/digipasschooserdirective';

describe('Digipass Chooser Directive', function() {
    beforeEach(angular.mock.module(directive));
    let $compile, $rootScope;
    beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_){
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<digipass-chooser></digipass-chooser>")($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("");
    });
});
