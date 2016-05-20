require.config({

	paths: {
		'angular' : ['libs/angular.min'],
		'angularRoute' : ['libs/angular-route.min'],
		'fullPage' : ['libs/fullPage.min'],
		'jquery' : ['libs/jquery.min'],
        'typed' : ['libs/typed'],
        'highlight' : ['libs/highlight.min'],
        'config' : ['config/config'],
        'phaser' : ['libs/phaser']
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
        typed : {
            deps : ['jquery'],
            exports : 'typed'
        },
        highlight : {
            exports : 'highlight'
        },
        'phaser' : {
            exports : 'Phaser'
        }
	}
});

require(['jquery', 'highlight', 'phaser', 'config', 'GameLogic', 'fullPage', 'typed',], 
    function($, hljs, Phaser, Config, GameLogic) {
	'use strict'

    const game = Config.init();

    game.state.add('Bootstrap', GameLogic.bootstrap);
    game.state.add('Play', GameLogic.play);
    game.state.add('GameOver', GameLogic.gameOver);

    game.state.start('Bootstrap');


    const INTRODUCTION = ['Let\'s explore this awesome world together! ^2000', 'I am pigeon ^500 how are you? ^3000'];
	var Config = {
            configFullpage : function ($) {
                $('#fullpage').fullpage({
                    
                    //Navigation
                    menu: '#menu',
                    lockAnchors: false,
                    anchors:['aboutme', 'interests', 'reading', 'contacts'],
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: [],
                    showActiveTooltip: true,
                    slidesNavigation: true,
                    slidesNavPosition: 'bottom',

                    //Scrolling
                    css3: true,
                    scrollingSpeed: 600,
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
                    onLeave: function(index, nextIndex, direction){
                            //toggle animation function
                        //@param toggleElement the toggled element object
                        var animationToggle = (toggleElement) => {
                            var toggleElement = toggleElement || {};

                            toggleElement.hasValue = (toggleElement, value) => {
                                var matched = false;
                                $.each(toggleElement, function(i ,v) {
                                    if(v === value) matched = true;
                                });
                                return matched;
                            };

                            var len = $.map(toggleElement, function(n, i) { return i; }).length;

                            if(len > 1) {
                                $.each(toggleElement, function(i, v) {
                                    if(typeof v === 'string') {
                                        $(i).addClass('animated ' + v);
                                    }
                                });
                            }

                            $('.animated').each(function(i, v) {
                                var $vClasses = $(v).attr('class').split('animated ');
                                
                                if(!toggleElement.hasValue(toggleElement, $vClasses[1])) {
                                    $(v).removeClass('animated ' + $vClasses[1]);
                                }
                                                                
                            });
                        };

                        var toggleElement;

                        switch(nextIndex) {
                            case 1:
                                $('div[data-anchor="aboutme"]').css('padding-bottom', 0);
                                $('footer').css('display', 'none');
                                break;
                            case 2:      
                                toggleElement = {
                                    'div[data-anchor="interests"] h3' : 'slideInUp',
                                    'div[data-anchor="interests"] .left' : 'fadeInLeft',
                                    'div[data-anchor="interests"] .right' : 'fadeInRight',
                                    '#penguin-logo' : 'swing'
                                };
                                
                                $('footer').css('display', 'none');
                                break;
                            case 3:
                                $('footer').css('display', 'none');
                                break;
                            case 4:
                                
                                toggleElement = {
                                    'form div' : 'slideInUp',
                                    'pre code.javascript' : 'bounceInRight',
                                    'div h2' : 'bounceInLeft'
                                };
                                $('footer').css('display', 'block');
                                break;
                        }
                        animationToggle(toggleElement);

                    },
                    afterLoad: function(anchorLink, index){

                    },
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
                },
            configTyped : function($) {
                $(".welcome-text").typed({
                    strings: INTRODUCTION,
                    typeSpeed: 0,
                    loop : true
                });  
            }
        };
    
    $(document).ready(function() {

        Config.configFullpage($);
        Config.configTyped($);   

        $('code.javascript').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        $('#name').on('keyup', function(e) {
            $('#span-name').text(e.target.value);
        });

    });  

    
});
