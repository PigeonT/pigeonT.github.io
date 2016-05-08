require.config({

	paths: {
		'angular' : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular', 'libs/angular'],
		'angularRoute' : ['https://code.angularjs.org/1.5.5/angular-route', 'libs/angular-route']
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
				})
				.when('/reading', {
					templateUrl: 'templates/reading.html',
					controller: 'readingController' 
				})
				.when('/contacts', {
					templateUrl: 'templates/contacts.html',
					controller: 'contactsController' 
				});
		}])
		.controller('containerController', function($scope) {
			
		})
		.controller('aboutmeController', function($scope) {;

		})
		.controller('interestsController', function($scope) {
			
		})
		.controller('readingController', function($scope) {;

		})
		.controller('contactsController', function($scope) {;

		});
});