define(['route', 'controllers/aboutmeController', 
		'controllers/interestsController', 
		'controllers/readingController', 
		'contactsController'], 
	function(route, aboutme, interests, reading, contacts) {

	'use strict'

	function _config() {

		aboutme.config();
		interests.config();
		reading.config();
		contacts.config();
	};

	return {
		config : _config
	}

});

