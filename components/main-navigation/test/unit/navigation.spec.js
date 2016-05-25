import MainController from './../../modules/navigation/main/mainController';
import angular from 'angular/index.js';
describe('MainController', function(){
  //beforeEach(module('navigation'));
  //beforeEach(angular.mock.module('app'));
  angular.module('navigation', [])
      .controller('MainController', MainController);
  beforeEach(angular.mock.module('navigation'));

  describe('navigation',() => {
    let navigationController;
    beforeEach(inject(function ($controller) {
      navigationController = $controller('MainController');
    } ));

    it('should be a text', function() {
      expect(navigationController.getNavigation()).toContain({label: 'Dashboard', url: '#'});
    });

    it('should show the size', function() {
     expect(navigationController.getNavigation().length).toBe(7);
    });
  });
});

