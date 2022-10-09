

class game_scene extends Phaser.Scene {
    constructor() {
        super("play_match");
    }

    preload(){
    }

    create(){
        this.physics.world.setBounds(0, 0, config.width, config.height);

        players = this.physics.add.group({ classType: Player, runChildUpdate: true});
        balls = this.physics.add.group({ classType: Ball, runChildUpdate: true});


        this.add.image(0, 0, "soccer_pitch").setOrigin(0);
        this.add.text(20,20, "Get Ready To Play!");
   
        this.input.keyboard.on("keydown_w", function(event){
            
        });
        this.input.keyboard.on("keydown_a", function(event){
        });
        this.input.keyboard.on("keydown_s", function(event){
        });
        this.input.keyboard.on("keydown_d", function(event){
        });

        this.input.keyboard.on("keyup_w", function(event){});
        this.input.keyboard.on("keyup_a", function(event){});
        this.input.keyboard.on("keyup_s", function(event){});
        this.input.keyboard.on("keyup_d", function(event){});
    }

    update(){
    }
}
