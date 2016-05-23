/* global b$ */
(function () {
    'use strict';



    var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container');
 
    Container.extend(function() {
        Container.apply(this, arguments);
        this.isPossibleDragTarget = true;
    }, {
        localName: 'sidebartemplate',
        namespaceURI: 'templates_sidebartemplate'
    }, {
        template: function(json) {
            var data = {item: json.model.originalItem};
            return window[this.namespaceURI][this.localName](data);
        },
        handlers: {
            DOMReady: function(){
                //add code, DOM ready

              angular.module('crelanApp', []);

              window.counter = window.counter || 0;
              console.log('inside loader', window.counter);
              //angular.module('crelanApp', []);
            },
            preferencesSaved: function(event){
                if(event.target === this) {
                    this.refreshHTML(function(item){
                        //add code, HTML refreshed
                    });
                }
            }
        }
    });
})();
