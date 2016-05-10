/**
 * NavMain Controller
 * @ngInject
 */
function NavMainCtrl() {
  var vm = this;

  vm.navigations = [
    {"label": "Dashboard", "url": "#"},
    {"label": "Rekeningen & kaarten", "url": "#"},
    {"label": "Betalen", "url": "#"},
    {"label": "Berichten & documenten", "url": "#"},
    {"label": "Beleggen", "url": "#"},
    {"label": "Kredieten", "url": "#"},
    {"label": "Verzekeringen", "url": "#"}
  ];
}


export default NavMainCtrl;