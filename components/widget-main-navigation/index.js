import navigation from './modules/navigation';

angular.module('app', [navigation]);

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document.body, ['app']);
});