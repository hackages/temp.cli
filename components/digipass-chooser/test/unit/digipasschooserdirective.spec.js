import directive from './../../modules/digipasschooser/digipasschooserdirective';


describe('Digipass Chooser Directive', function() {
    beforeEach(angular.mock.module(directive));
    let $compile, $scope;
    beforeEach(angular.mock.inject(function(_$compile_, $rootScope){
        $scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<digipass-chooser></digipass-chooser>")($scope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("via Digipass");
    });
});
