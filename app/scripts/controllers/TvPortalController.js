'use strict';
angular.module('TvPortal')
.controller('TvPortalController',
function ($scope, $timeout, Shows, Mirrors) {
    console.log("Loading shows...");
    Shows.query(function (data) {
    	$scope.shows = data.shows;
    	console.log("Loaded shows: " + $scope.shows.length);
    	
		$timeout(function () {
			console.log("Start layout.");
			var container = document.querySelector('#show-container');
			var msnry = new Masonry( container, {
				columnWidth: 250
			});
			console.log("Set up grid.");
		});
    });

    Mirrors.query(function (data) {
    	console.log(data);
    });
});
