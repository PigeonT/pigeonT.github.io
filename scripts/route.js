define(['angular', 'angularRoute'], function(angular) {

	'use strict'

	function _config() {
		angular.module('pigeonT')
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
	};

	return {
		module : angular.module,
		config : _config
	}

});
