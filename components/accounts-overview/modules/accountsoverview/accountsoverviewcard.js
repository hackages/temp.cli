import angular from 'angular/index.js';
import accountoverviewcardtemplate from './accounts-overview-card.html';
import iban from 'iban';

const cardModule = angular.module('crelan.accounts.overview.card', []);
/**
 * Component for the overview card.
 */
cardModule.component('accountsOverviewCard', {
    template: accountoverviewcardtemplate,
    bindings: {
        "accountTitle" : "=",
        "primaryAlias": "=",
        "secondaryAlias": "=",
        "accountNumber": "=",
        "amount": "=",
        "limit": "=",
        "icon": "@"
    }
});
cardModule.filter('iban', () => {
    return (input) => {
        input = input || '';
        return iban.printFormat(input, ' ');
    }
});
export default cardModule.name;
