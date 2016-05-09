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

require(['route', 'controller'], function(route) {
	'use strict'
	
	route.config();

	//main logic begin
	document.getElementsByClassName('content')[0].style.minHeight = (window.innerHeight - 180) + 'px';

	document.addEventListener('DOMContentLoaded', function() {
		window.location.pathname='templates/aboutme.html';
	});
});