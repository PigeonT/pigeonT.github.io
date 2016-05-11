require.config({

	paths: {
		'angular' : ['libs/angular.min'],
		'angularRoute' : ['libs/angular-route.min'],
		'fullPage' : ['libs/fullPage.min'],
		'jquery' : ['libs/jquery.min']
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
		}
	}
});

require(['jquery', 'fullPage'], function($) {
	'use strict'
	
$(document).ready(function() {

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['aboutme', 'interests', 'reading', 'contacts'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
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
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        	var anchors = ['aboutme', 'interests', 'reading', 'contacts'];
        	var loadedSlide = $(this);
        	console.debug('here');
        	$('#navbar-pigeont .active').removeClass("active");
        	
        	$li = $('#navbar-pigeont li')[index];
			$li.addClass("active");

        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

});
