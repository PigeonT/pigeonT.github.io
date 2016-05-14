window.addEventListener('load', function() {
	'use strict'
	var Q = Quintus()
		.setup('game-canvas', {maximize : true})
		.controls()
		.touch();

	

	Q.scene('level', function(stage) {
		Q.stageTMX('../resources/maps/map.tmx', stage);
	});

	Q.loadTMX('../resources/maps/map.tmx', function() {
		Q.stageScene('level');
	});
});