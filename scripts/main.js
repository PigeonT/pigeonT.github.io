require.config({

	paths: {
		'angular' : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min', 'libs/angular.min'],
		'angularRoute' : ['https://code.angularjs.org/1.5.5/angular-route.min', 'libs/angular-route.min']
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

require(['angular', 'route'], function(angular, route) {
	'use strict'

	route.config();

	angular.module('pigeonT')
		.controller('containerController', ['$scope', function($scope) {
			
		}])
		.controller('aboutmeController', ['$scope', function($scope) {
			
		}])
		.controller('interestsController', ['$scope', function($scope) {
			
		}])
		.controller('readingController', ['$scope', function($scope) {
			
		}])
		.controller('contactsController', ['$scope', function($scope) {
			
		}]);
});