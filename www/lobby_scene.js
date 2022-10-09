
class lobby_scene extends Phaser.Scene {
    constructor() {
        super("lobby");
        this.launch_conditions_met = false;
        this.asset_paths = {
        "soccer_pitch":"assets/images/soccer_pitch.png",
        "player_arm":"assets/images/kenney_nl__CC0__tilesheet__character_white_12.png",
        "player_leg":"assets/images/kenney_nl__CC0__tilesheet__character_white_14.png",
        "player_body1":"assets/images/kenney_nl__CC0__tilesheet__character_white_9.png",
        "player_body2":"assets/images/kenney_nl__CC0__tilesheet__character_white_4.png",
        "ball1":"assets/images/kenney_nl__CC0__sprite__ball_soccer1.png",
        "ball2":"assets/images/kenney_nl__CC0__sprite__ball_soccer2.png",
        "ball3":"assets/images/kenney_nl__CC0__sprite__ball_soccer3.png",
        "ball4": "assets/images/kenney_nl__CC0__sprite__ball_soccer4.png"
        }
    }

    preload(){
        for(var key in this.asset_paths){
            this.load.image(key, this.asset_paths[key]);
            var message = "loaded: "+key+" <"+this.asset_paths[key]+">";
            console.log(message);
        }
    }

    create(){
        this.add.image(0, 0, "soccer_pitch").setOrigin(0);

        this.add.text(20, 20, "Welcome to the Lobby!");
    
        this.input.keyboard.on("keydown", function(event){
            var keyCodes = Phaser.Input.Keyboard.Keycodes;

            if(event.keyCode == 112){
                this.scene.start("play_match");
            }
        }, this);

    }

    update(){
    }
}


