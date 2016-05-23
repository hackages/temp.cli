const crelanDigipassIdentification= 'crelan.digipass-identification';

import identification from './modules/identification';
angular.module(crelanDigipassIdentification, [identification]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelanDigipassIdentification]);
});
