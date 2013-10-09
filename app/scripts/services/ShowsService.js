'use strict';
angular.module('TvPortal.service', ['ngResource'])
.factory('Shows', function ($resource) {
    return $resource('data/shows.json', {}, {
    	CHANGE GENERATOR TO RETURN PROMISE
        query: {method: 'GET', isArray: false}
    });
});
