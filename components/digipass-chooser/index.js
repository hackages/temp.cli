import digipasschooser from './modules/digipasschooser';
import svgxuse from 'svgxuse';

const crelandigipasschooser = 'crelan.digipasschooser';
angular.module(crelandigipasschooser, [digipasschooser]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelandigipasschooser]);
});
