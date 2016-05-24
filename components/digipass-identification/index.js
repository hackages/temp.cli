const crelanIdentification= 'crelan.identification';

import digipassIdentification from './modules/digipass-identification/digipassidentificationdirective';

angular.module(crelanIdentification, [digipassIdentification]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelanIdentification]);
});
