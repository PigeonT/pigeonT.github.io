define(['route'], function() {
	function _config() {
		//inject all dependency
		require(['controllers/aboutmeController', 
				'controllers/interestsController', 
				'controllers/readingController', 
				'controllers/contactsController'], function() {});

	}

	return {
		config : _config
	}

});

