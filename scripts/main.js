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


	//bootstrap angular
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['pigeonT']);
    });
});