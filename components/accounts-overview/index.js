/*import accountsOverview from './modules/accountsoverview';
import mocks from './mocks';*/

const crelanAccountsModule = 'crelan.accounts';
angular.module(crelanAccountsModule, [/*accountsOverview, mocks*/]);

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.body, [crelanAccountsModule]);
});