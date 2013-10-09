'use strict';
angular.module('TvPortal.service')
.factory('Mirrors', function ($http) {
    return {
    	query: function (callback) {
    		return $http.get('http://thetvdb.com/api/4703ED4C70CBFC2C/mirrors.xml').then(function (result) {
    			CHANGE GENERATOR TO RETURN PROMISE
    			ANGULAR TRANSFORM?
    			UPDATE GENERATOR TO HANDLE XML
    			var x2js = new X2JS();
    			var json = x2js.xml2json(result);
    			callback(json);
    		});
    	}
    }
});
