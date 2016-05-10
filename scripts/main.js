require.config({

	paths: {
		'angular' : ['libs/angular.min'],
		'angularRoute' : ['libs/angular-route.min'],
		'fullPage' : ['libs/fullPage.min'],
		'jquery' : ['libs/jquery.min'],
		'bootstrap' : ['libs/bootstrap']
	},

	shim: {
		angular: {
			exports: 'angular'
		},

		angularRoute : {
			deps : ['angular'],
			exports : 'angular-route'
		},

		jquery : {
			exports : '$'
		},

		fullPage : {
			deps : ['jquery'],
			exports : 'fullpage'
		},

		bootstrap : {
			deps : ['jquery'],
			exports : 'bootstrap'
		}
	}
});

require(['jquery', 'fullPage', 'bootstrap'], function($) {
	'use strict'
	
	//route.config();

	//controller.config();

	//main logic begin

	$(document).ready(function() {
    	$('#fullpage').fullpage();
	});

});