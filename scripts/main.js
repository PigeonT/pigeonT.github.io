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

require(['angular', 'route', 'angularRoute'], function(angular, route, ngRoute) {
	'use strict'

	//define angular module
	angular.module('pigeonT', ['ngRoute']);

	route.config();

	angular.module('pigeonT')
		.controller('containerController', function($scope) {
			
		})
		.controller('aboutmeController', function($scope) {;

		});
});