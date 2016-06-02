import angular from 'angular/index.js';
import digipassTemplate from './digipass.html';

const module = angular.module('crelan.digipassChooserDirective', [])
  .directive('digipassChooser', digipassChooserDirective);
export default module.name;

function digipassChooserDirective() {
  return {
    restrict: 'EA',
    template: digipassTemplate,
    controller: function digipassChooserController() {
      let staticRoot = window.launchpad ? window.launchpad.staticRoot : '/static';
      this.getIcon = function getIcon(icon) {
        return `${staticRoot}/features/[BBHOST]/icons/dist/icons.svg#${icon}`;
      };

      this.getUri = function getUri(to) {
        if (window.b$) {
          return `${window.b$.portal.config.serverRoot}/${window.b$.portal.portalName}/${to}`;
        } else {
          return `/${to}`
        }
      };
    },
    controllerAs: 'digipassChooserCtrl',
  }
}
