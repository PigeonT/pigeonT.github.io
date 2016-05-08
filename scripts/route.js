define(['angular', 'angularRoute'], function(angular, ngRoute) {

	'use strict'

	function _config() {

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
			}]);

	    angular.element(document).ready(function() {
	      angular.bootstrap(document, ['pigeonT']);
	    });


	};

	return {
		config : _config
	}

});
