define(['angular', 'angularRoute'], function(angular, ngRoute) {

	'use strict'

	function _config() {
		window.app = angular.module('pigeonT', [ngRoute]);

			app.config(['$routeProvider', function($routeProvider) {
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
		}]);


	};

	return {
		config : _config
	}

});
