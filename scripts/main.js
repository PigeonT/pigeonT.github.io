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

require(['route'], function(angular, ngRoute) {
	'use strict'

	angular.module('pigeonT', ['ngRoute'])
		.controller('containerController', function($scope) {
			
		})
		.controller('aboutmeController', function($scope) {
        })
		.controller('interestsController', function($scope) {
        })
        .controller('readingController', function($scope) {
        })
        .controller('contactsController', function($scope) {
        });

});