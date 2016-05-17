define(['phaser'], function(Phaser) {
	var GameLogic = GameLogic || {};
	
	var hero,
		map,
		background_layer,
		world_layer,
		cursors,
		onGround = false,
		animalGroup,
		score = 0,
		scroeText;

	const COLLISION_ARRAY = [267, 268, 269, 270, 271, 83, 84, 39, 405, 281, 282, 369, 455, 370, 451, 456, 457, 458, 807, 808, 809, 367, 368, 369, 691, 692, 867, 868, 895, 896, 897, 898];
	
	const KEYS = {'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'up': Phaser.KeyCode.UP};

	GameLogic.touchGround = function() {
		onGround = true;
	}


	GameLogic.getAnimal = function(hero, animal) {
		animal.kill();

		score += 10;
    	scoreText.text = 'Score: ' + score;
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

			this.game.load.image('animal_panda', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_giraffe', '../htmlGame/resources/img/giraffe.png');
			this.game.load.image('animal_monkey', '../htmlGame/resources/img/monkey.png');
			this.game.load.image('animal_penguin', '../htmlGame/resources/img/penguin.png');this.game.load.image('animal_giraffe', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_rabbit', '../htmlGame/resources/img/rabbit.png');
			this.game.load.image('animal_pig', '../htmlGame/resources/img/pig.png');this.game.load.image('animal_giraffe', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_snake', '../htmlGame/resources/img/snake.png');
			this.game.load.image('animal_elephant', '../htmlGame/resources/img/elephant.png');this.game.load.image('animal_snake', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_hippo', '../htmlGame/resources/img/hippo.png');this.game.load.image('animal_snake', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_parrot', '../htmlGame/resources/img/parrot.png');

			this.game.load.spritesheet('hero', '../htmlGame/resources/img/hero.png', 61.5, 65);		

		},
		create : function() {

			function initialAnimalPosition(x, y, image) {

			    var animal = animalGroup.create(x, y, image);

			    animal.body.immovable = true;

			    animal.width=32;
	   		    animal.height=28;
			}

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

		    animalGroup = this.game.add.group();

		    animalGroup.enableBody = true;

		    initialAnimalPosition(800, 200, 'animal_penguin');
		  	//initialAnimalPosition(2000, 800, 'animal_giraffe');
		  	initialAnimalPosition(1650, 50, 'animal_monkey');
		  	initialAnimalPosition(1400, 200, 'animal_rabbit');
		  	initialAnimalPosition(1850, 100, 'animal_pig');
		  	initialAnimalPosition(3400, 300, 'animal_snake');
		  	initialAnimalPosition(2500, 350, 'animal_elephant');
		  	initialAnimalPosition(3000, 50, 'animal_hippo');
		  	initialAnimalPosition(3500, 50, 'animal_parrot');
		  	initialAnimalPosition(3750, 300, 'animal_panda');





   		    scoreText = this.game.add.text(50, 50, 'score: 0', { fontSize: '32px', fill: '#000' });		
   		    scoreText.fixedToCamera = true


		    hero.animations.add('left', [0, 1, 2, 3], 10, false);
		    hero.animations.add('right', [5, 6, 7, 8], 10, false);

		},

		update : function() {
		    this.game.physics.arcade.collide(hero, world_layer, GameLogic.touchGround);
		    this.game.physics.arcade.overlap(hero, animalGroup, GameLogic.getAnimal, null, this.game)

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
