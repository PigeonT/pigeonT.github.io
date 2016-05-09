define(['angular', 'angularRoute'], function(angular, ngRoute) {

	'use strict'

	function _config() {

		angular.module('pigeonT', ['ngRoute'])
			.config(['$routeProvider', function($routeProvider) {
				$routeProvider
					.when('/aboutme', {
						templateUrl: 'templates/aboutme.html',
						controller: 'controllers/aboutmeController' 
					})
					.when('/interests', {
						templateUrl: 'templates/interests.html',
						controller: 'controllers/interestsController' 
					})
					.when('/reading', {
						templateUrl: 'templates/reading.html',
						controller: 'controllers/readingController' 
					})
					.when('/contacts', {
						templateUrl: 'templates/contacts.html',
						controller: 'controllers/contactsController' 
					});
			}]);

	    angular.element(document).ready(function() {
	      angular.bootstrap(document, ['pigeonT']);
	    });


	};

	return {
		config : _config
	}

});
