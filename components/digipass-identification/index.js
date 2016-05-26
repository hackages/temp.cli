import angular from 'angular/index.js';
import svgxuse from 'svgxuse';
import mocks from './mocks';
import digipassIdentification
  from './modules/digipass-identification/digipassidentificationdirective';

const crelanIdentification = 'crelan.identification';

angular.module(crelanIdentification, [digipassIdentification, mocks]);

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.querySelector('#digipass-identification'), [crelanIdentification]);
});
