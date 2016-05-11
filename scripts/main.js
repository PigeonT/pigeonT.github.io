require.config({

	paths: {
		'angular' : ['libs/angular.min'],
		'angularRoute' : ['libs/angular-route.min'],
		'fullPage' : ['libs/fullPage.min'],
		'jquery' : ['libs/jquery.min'],
		'bootstrap' : ['libs/bootstrap'],
        'pace' : ['libs/pace']
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

require(['jquery', 'fullPage', 'bootstrap', 'pace'], function($, fullPage, bootstrap, pace) {
	'use strict'
	
	//route.config();

	//controller.config();

	//main logic begin

	$(document).ready(function() {
    	$('#fullpage').fullpage({
			anchors:['aboutme', 'interests', 'reading', 'contacts'],       
	    	navigation: true,
	        navigationPosition: 'right',
	        navigationTooltips: ['aboutme', 'interests', 'reading', 'contacts'],
	        showActiveTooltip: true,
	        slidesNavigation: true,
	        slidesNavPosition: 'bottom',

	        //Scrolling
	        css3: true,
	        scrollingSpeed: 700,
	        autoScrolling: true,
	        fitToSection: true,
	        fitToSectionDelay: 1000,
	        scrollBar: false,
	        easing: 'easeInOutCubic',
	        easingcss3: 'ease',
	        loopBottom: false,
	        loopTop: false,
	        loopHorizontal: true,
	        continuousVertical: false,
	        normalScrollElements: '#element1, .element2',
	        scrollOverflow: false,
	        touchSensitivity: 15,
	        normalScrollElementTouchThreshold: 5,

	        //Accessibility
	        keyboardScrolling: true,
	        animateAnchor: true,
	        recordHistory: false,


	        //Custom selectors
	        sectionSelector: '.section',
	        slideSelector: '.slide'

    	});
	});

});
