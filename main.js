require.config({
    paths: {
        'config' : ['config/config'],
        'phaser' : ['libs/phaser']
    },

    shim: {
        'phaser' : {
            exports : 'Phaser'
        }
    }
});

require(['phaser', 'config', 'GameLogic'], function(Phaser, Config, GameLogic) {
    const game = Config.init();

    game.state.add('Bootstrap', GameLogic.bootstrap);
    game.state.add('Play', GameLogic.play);
    game.state.add('GameOver', GameLogic.gameOver);
    game.state.add('Win', GameLogic.win);


    game.state.start('Bootstrap');

});