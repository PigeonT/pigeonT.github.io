define(['route'], function() {

	'use strict'

	function _config() {

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
	};

	return {
		config : _config
	}

});
