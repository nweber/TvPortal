'use strict';

console.log("Environment: " + '/* @echo NODE_ENV */' + " | Version: " + '/* @echo VERSION */');

angular.module('TvPortal.service', []);

angular.module('TvPortal.directive', []);

angular.module('TvPortal.filter', []);

angular.module('TvPortal', [
    'TvPortal.service',
    'TvPortal.directive',
    'TvPortal.filter'
]);
