describe('Testing Navigation widget', function(){

  angular.module('app', [])
  .controller('NavMainController', NavController);

  function NavController() {
    this.navigations = [
      {"label": "Dashboard", "url": "#", "active":"navigation__main__item--active"},
      {"label": "Rekeningen & kaarten", "url": "#", "active":""},
      {"label": "Betalen", "url": "#", "active":""},
      {"label": "Berichten & documenten", "url": "#", "active":""},
      {"label": "Beleggen", "url": "#", "active":""},
      {"label": "Kredieten", "url": "#", "active":""},
      {"label": "Verzekeringen", "url": "#", "active":""}
    ];
  }



  beforeEach(angular.mock.module('app'));

    var ctrl;
    beforeEach(inject(function ($controller) {
      ctrl = $controller('NavMainController');
    } ));

    it('Navigations should have size of 7', function() {
     expect(ctrl.navigations.length).toBe(7);
    });
});

