require.config({

	paths: {
		'angular' : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min', 'libs/angular'],
		'angularRoute' : ['https://code.angularjs.org/1.5.5/angular-route.min', 'libs/angular-route']
	},

	shim: {
		angular: {
			exports: 'angular'
		},

		angularRoute : {
			deps : ['angular'],
			exports : 'angular-route'
		}
	}
});

require(['angular', 'angularRoute'], function(angular, ngRoute) {
	'use strict'

	angular.module('pigeonT', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/aboutme', {
					templateUrl: 'templates/aboutme.html',
					controller: 'aboutmeController' 
				})
				.when('/interests', {
					templateUrl: 'templates/interests.html',
					controller: 'interestsController' 
				});
		}])
		.controller('containerController', function($scope) {
			
		})
		.controller('aboutmeController', function($scope) {
        });;

});