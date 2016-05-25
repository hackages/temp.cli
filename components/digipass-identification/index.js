import angular from 'angular/index.js';
import mocks from './mocks';
import digipassIdentification
  from './modules/digipass-identification/digipassidentificationdirective';

const crelanIdentification = 'crelan.identification';

angular.module(crelanIdentification, [digipassIdentification, mocks]);

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.body, [crelanIdentification]);
});
