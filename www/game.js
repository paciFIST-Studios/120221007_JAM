
// basic information sent to engine
var config = {
    width: 800,
    height: 600,
    backgroundColor: "#000000",

    parent: "gameContainer",
    scene: [lobby_scene, game_scene],

    physics: {
        default: "arcade"
    }
};

window.onload = function(){
    var game = new Phaser.Game(config);
}
