const crelanIdentification = 'crelan.identification';

import mocks from './mocks';
import digipassIdentification from './modules/digipass-identification/digipassidentificationdirective';

angular.module(crelanIdentification, [digipassIdentification, mocks ]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, [crelanIdentification]);
});
