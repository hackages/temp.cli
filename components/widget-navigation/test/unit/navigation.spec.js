describe('Testing Navigation widget', function () {

  angular.module('app', [])
    .controller('NavMainController', NavController);

  function NavController() {
    this.navigations = [
      {"label": "Dashboard", "url": "#", "active": "navigation__main__item--active"},
      {"label": "Rekeningen & kaarten", "url": "#", "active": ""},
      {"label": "Betalen", "url": "#", "active": ""},
      {"label": "Berichten & documenten", "url": "#", "active": ""},
      {"label": "Beleggen", "url": "#", "active": ""},
      {"label": "Kredieten", "url": "#", "active": ""},
      {"label": "Verzekeringen", "url": "#", "active": ""}
    ];
  }

  beforeEach(angular.mock.module('app'));

  var ctrl;
  beforeEach(inject(function ($controller) {
    ctrl = $controller('NavMainController');
  }));

  it('Navigations should have size of 7', function () {
    expect(ctrl.navigations.length).toBe(7);
  });

  it('Navigation 0 should have label Dashboard', function() {
    expect(ctrl.navigations[0].label).toEqual("Dashboard");
  });

  it('Navigation 0 should have url #', function() {
    expect(ctrl.navigations[0].url).toEqual("#");
  });

  it('Navigation 0 should have active navigation__main__item--active', function() {
    expect(ctrl.navigations[0].active).toEqual("navigation__main__item--active");
  });
});

