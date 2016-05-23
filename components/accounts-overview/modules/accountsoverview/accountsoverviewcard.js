import angular from 'angular/index.js';
import accountoverviewcardtemplate from './accounts-overview-card.html';

const cardModule = angular.module('crelan.accounts.overview.card', []);
/**
 * Component for the overview card.
 */
cardModule.component('accountsOverviewCard', {
    template: accountoverviewcardtemplate,
    bindings: {
        "primaryAlias": "=",
        "secondaryAlias": "=",
        "accountNumber": "=",
        "amount": "=",
        "limit": "="
    }
});
export default cardModule.name;
