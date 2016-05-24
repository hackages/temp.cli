const crelanDigipassIdentification= 'crelan.digipass-identification';

import identification from './modules/identification';
import login from './modules/login';
angular.module(crelanDigipassIdentification, [identification, login]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelanDigipassIdentification]);
});
