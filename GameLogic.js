define(['phaser'], function(Phaser) {
	var GameLogic = GameLogic || {};
	
	var hero,
		map,
		background_layer,
		world_layer,
		cursors,
		onGround = false;

	const COLLISION_ARRAY = [267, 268, 269, 270, 271, 83, 84, 39, 405, 281, 282, 369, 455, 370, 451, 456, 457, 458, 807, 808, 809, 367, 368, 369, 691, 692, 867, 868, 895, 896, 897, 898];
	
	const KEYS = {'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'up': Phaser.KeyCode.UP};

	GameLogic.touchGround = function() {
		onGround = true;
	}


	GameLogic.bootstrap = {
		preload : function() {

		},

		create : function() {
			this.game.state.start('Play')
		},

		update : function() {

		}
	}

	GameLogic.gameOver = {
		preload : function() {

		},

		create : function() {

		},

		update : function() {

		}
	}

	GameLogic.play = {
		preload : function() {
			this.game.load.tilemap('game_world', '../htmlGame/resources/maps/world.json', null, Phaser.Tilemap.TILED_JSON);
			this.game.load.image('tilesheet', '../htmlGame/resources/img/tilesheet.png');
			this.game.load.image('bg_layer', '../htmlGame/resources/img/bg_layer.png');
			this.game.load.spritesheet('hero', '../htmlGame/resources/img/hero.png', 61.5, 65);		
		},
		create : function() {

			this.game.physics.startSystem(Phaser.Physics.ARCADE);

		    map = this.game.add.tilemap('game_world');
		 
 		    map.addTilesetImage('background_color', 'bg_layer');
		    map.addTilesetImage('world', 'tilesheet');

		    background_layer = map.createLayer('background_layer');
		    world_layer = map.createLayer('background');

		    world_layer.resizeWorld();
				 
 		    hero = this.game.add.sprite(80, 90, 'hero');
		    hero.frame = 4;		    

		    map.setCollision(COLLISION_ARRAY, true, 'background');

		    this.game.physics.arcade.enable(hero);

		    hero.body.gravity.y = 950;

		    hero.body.setSize(32, 65);
		    
		    this.game.camera.follow(hero);

		    hero.animations.add('left', [0, 1, 2, 3], 10, false);
		    hero.animations.add('right', [5, 6, 7, 8], 10, false);

		},

		update : function() {
		    this.game.physics.arcade.collide(hero, world_layer, GameLogic.touchGround);
		    cursors = this.game.input.keyboard.addKeys(KEYS);

		    hero.body.velocity.x = 0;
		    if (cursors.left.isDown && cursors.up.isDown && onGround)
		    {
		        hero.body.velocity.x = -350;
		        hero.body.velocity.y = -485;
				onGround = false;

		        hero.animations.play('left');
		    }else if (cursors.left.isDown)
		    {
		        hero.body.velocity.x = -350;
		        hero.animations.play('left');

		    }else if (cursors.left.isDown && cursors.up.isDown && onGround)
		    {
		        hero.body.velocity.x = -350;
		        hero.body.velocity.y = -485;
				onGround = false;

		        hero.animations.play('left');
		    }else if (cursors.right.isDown && cursors.up.isDown && onGround)
		    {
		        hero.body.velocity.x = 350;
		        hero.body.velocity.y = -485;
				onGround = false;

		        hero.animations.play('right');
		    }else if (cursors.right.isDown)
		    {
		        hero.body.velocity.x = 350;

		        hero.animations.play('right');
		    }else if (cursors.up.isDown && onGround) {
				hero.body.velocity.y = -485;
				onGround = false;
		    }
		}
		
	}


	return GameLogic;
});