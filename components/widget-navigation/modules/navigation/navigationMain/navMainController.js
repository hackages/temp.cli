/**
 * NavMain Controller
 * @ngInject
 */
function NavMainCtrl() {
  var vm = this;

  vm.navigations = [
    {"label": "Dashboard", "url": "#", "active":"navigation__main__item--active"},
    {"label": "Rekeningen & kaarten", "url": "#", "active":""},
    {"label": "Betalen", "url": "#", "active":""},
    {"label": "Berichten & documenten", "url": "#", "active":""},
    {"label": "Beleggen", "url": "#", "active":""},
    {"label": "Kredieten", "url": "#", "active":""},
    {"label": "Verzekeringen", "url": "#", "active":""}
  ];
}


export default NavMainCtrl;