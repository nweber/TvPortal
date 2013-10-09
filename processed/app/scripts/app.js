'use strict';

console.log("Environment: " + 'development' + " | Version: " + '0.0.1');

angular.module('TvPortal.service', []);

angular.module('TvPortal.directive', []);

angular.module('TvPortal.filter', []);

angular.module('TvPortal', [
    'TvPortal.service',
    'TvPortal.directive',
    'TvPortal.filter'
]);
