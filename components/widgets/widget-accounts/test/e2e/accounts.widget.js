/**
*  ----------------------------------------------------------------
*  Copyright © Backbase B.V.
*  ----------------------------------------------------------------
*  Author : Backbase R&D - Amsterdam - New York
*/

'use strict';

var utils = global.utils;

module.exports = function (config) {

    config = config || {
        name: 'widget-accounts',
        title: 'Accounts'
  };

	var widget = this;

	widget.name = config.name;
	widget.title = config.title;
	/**
	* Prepare all elements
	* @return {promise} Return widget.elements
	*/
	widget.get = function() {
		var d = utils.q.defer();
    utils.getWidget(widget.title).then(function (res) {
			widget.chrome = res.chrome;
			widget.body = res.body;

      widget.groupListAccounts = function(index) {
          var rows = by.repeater('group in assets.assetCollection');
          if (utils.isNumber(index)) {
            return widget.body.element(rows.row(index));
            } else {
              return widget.body.all(rows);
              }
              };

      widget.accountsList = function(index) {
          var items = by.repeater('account in group.accounts');
            if (utils.isNumber(index)) {
              return widget.body.element(items.row(index));
          } else {
              return widget.body.all(items);
        }
      };

			d.resolve(widget);

		});
		return d.promise;
	};
	/**
	* The widget should be visible on the page
	* @return {Boolean}
	*/
	widget.isVisible = function(element) {
		return utils.isObject(element) ? element.isDisplayed() : widget.body.isDisplayed();
	};

	/**
	 * The groups of accounts should be collapsible
	 */
	widget.toggleGroup = function(index) {
		widget.groupListAccounts(index).element(by.css('.panel-heading')).click();
	};

	/**
	 * Return the list of groups in Accounts widgets
	 */

	widget.getGroupsAccounts = function() {
		return widget.groupListAccounts();
	};

	/**
	 * Return groups are in Accounts widgets
	 */

	widget.getGroupAccounts = function(index) {
		return widget.groupListAccounts(index).element(by.css('.list-group'));
	};

    widget.getAccountsGroupTitle = function() {
        return widget.groupListAccounts(0).element(by.css('[lp-i18n="Current Accounts"]')).getText();
    };

    widget.getCardsGroupTitle = function() {
        return widget.groupListAccounts(1).element(by.css('[lp-i18n="Credit Cards"]')).getText();
    };

  widget.getAccountName = function(index) {
    return widget.accountsList(index).all(by.css('.list-group-item .ng-binding')).getText();
  };

	widget.getAccountIcon = function(index) {
		return widget.accountsList(index).all(by.css('.account-icon'));
	};

  widget.getAmount = function(index) {
    return widget.accountsList(index).all(by.css('.lp-amount-negative'));
  };




};
