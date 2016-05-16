'use strict'

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 699;
var game;
var cursors;
var player;
var world;

game = new Phaser.Game(CANVAS_WIDTH, CANVAS_HEIGHT, Phaser.AUTO, 'game-wrapper', { preload: onPreload, create: onCreate, update: onUpdate });

function onPreload() {	

    game.load.tilemap('background', '../htmlGame/resources/maps/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet('dude', '../htmlGame/resources/maps/assets/player.png', 61.5, 65);
	game.load.image('monkey', '../htmlGame/resources/monkeylad_further.png');
}


function onCreate() {
       //Start the Arcade Physics systems
    game.physics.startSystem(Phaser.Physics.ARCADE);
 
    //Change the background colour
    //game.stage.backgroundColor = "#a9f0ff";
 
    //Add the tilemap and tileset image. The first parameter in addTilesetImage
    //is the name you gave the tilesheet when importing it into Tiled, the second
    //is the key to the asset in Phaser
    map = game.add.tilemap('background');
 
    map.addTilesetImage('monkeylad_further', 'monkey');

    //Add both the background and ground layers. We won't be doing anything with the
    //GroundLayer though
    Qbackground = map.createLayer('background');
    //foreground = map.createLayer('foreground');
     //  Resize the world
    Qbackground.resizeWorld();
 

    //Before you can use the collide function you need to set what tiles can collide
    map.setCollision(674, true, 'background');
    //game.physics.arcade.convertTilemap(map, "background");
    player = game.add.sprite(80, 90, 'du1de');
    player.frame = 4;
    //Change the world size to match the size of this layer

    game.physics.arcade.enable(player);
    game.physics.arcade.enable(Qbackground);

    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.physics.enable(Qbackground, Phaser.Physics.ARCADE);
    Qbackground.body.gravity.y = 200;

    player.body.gravity.y = 800;

    player.body.bounce.y = 0.2;

    player.body.setSize(48, 48);


    game.add.existing(Qbackground);

    //groundLayer.resizeWorld();

    game.physics.arcade.collide(player, Qbackground);

    player.animations.add('left', [0, 1, 2, 3], 10, false);
    player.animations.add('right', [5, 6, 7, 8], 10, false);
}

function onUpdate() {
     game.physics.arcade.collide(player, Qbackground);

     //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    cursors = game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -350;

        player.animations.play('left');
    }else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 350;

        player.animations.play('right');
    }
}
function x_create() {	
    game.physics.startSystem(Phaser.Physics.P2JS);

    map = game.add.tilemap('background');
    map.addTilesetImage('monkeylad_further', 'monkey');

    var backgroundLayer = map.createLayer('background');
    var foregroundLayer = map.createLayer('foreground');  

    //backgroundLayer.resizeWorld();


    map.setCollision([294, 351, 390, 1209, 342, 678], true, 'background');

	//Then the physics engine creates collision bodies from the tiles:
	game.physics.p2.convertTilemap(map, 'background');

    game.physics.p2.restitution = 0.5;
    game.physics.p2.gravity.y = 300;
    //game.physics.p2.gravity.y = -250;

    player = game.add.sprite(80, 90, 'dude');


    game.physics.p2.enable(player);

    //game.physics.p2.restitution = 0.8;

    player.body.fixedRotation = true;

    //player.body.velocity.y = -25;

    //player.body.mass = 2000;

   // game.physics.arcade.enable(player);
    //  This resizes the game world to match the layer dimensions
    //layer.resizeWorld();

    //  Player physics properties. Give the little guy a slight bounce.
    //player.body.bounce.y = 0.2;
    //player.body.gravity = 300;
    //player.body.mass = 2000;
    // player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //player.body.fixedRotation = true; // no rotation
	//Remove default collision box
	//player.body.clearShapes();  
	//Only the lower part of the player collides
	//player.body.addRectangle(100, 100, 0, 25);
	//Controls
	cursors = game.input.keyboard.createCursorKeys();
	player.body.debug = true;
}

function x_update() {
   //  Reset the players velocity (movement)
    //player.body.velocity.x = 0;

    //cursors = game.input.keyboard.createCursorKeys();

    // if (cursors.left.isDown)
    // {
    //     //  Move to the left
    //     player.body.velocity.x = -150;

    //     player.animations.play('left');
    // }
    // else if (cursors.right.isDown)
    // {
    //     //  Move to the right
    //     player.body.velocity.x = 150;

    //     player.animations.play('right');
    // }
    // else
    // {
    //     //  Stand still
    //     player.animations.stop();

    //     player.frame = 4;
    // }

    // //  Allow the player to jump if they are touching the ground.
    // if (cursors.up.isDown && player.body.touching.down)
    // {
    //     player.body.velocity.y = -350;
    // }

    // game.physics.arcade.collide(stars, platforms);

    // game.physics.arcade.overlap(player, stars, collectStar, null, this);
}


function m_create() {
	//  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;

       // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    stars = game.add.group();

    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 6;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }


}

function m_update() {
	//  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);

     //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    cursors = game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

    game.physics.arcade.collide(stars, platforms);

    game.physics.arcade.overlap(player, stars, collectStar, null, this);


}


function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

}