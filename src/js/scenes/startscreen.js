import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Player } from '../player'
import { Sans } from '../sans'
import { Bone } from '../bones'
import { HealthBar } from '../healthBar.js'


export class Start extends Scene {
    constructor() {
        super({ width: 640, height: 480 });
    }
    

    onInitialize(engine) {
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        let player = new Player();
        this.add(player);

        this.sans = new Sans();
        this.add(this.sans);
        Resources.settingMusic.stop(0.7)
        Resources.backgroundMusic.play(0.7)


        new HealthBar()

        const textbox = new Actor();
        textbox.graphics.use(Resources.Text.toSprite());
        textbox.pos = new Vector(320, 400);
        textbox.scale = new Vector(1, 1);
        this.add(textbox);

        const timer = new Timer({
            fcn: () => this.spawnBones(),
            repeats: true,
            interval: 1000,
        })

        this.add(timer)

        timer.start()
    }
   
    spawnBones() {
        let bones = new Bone();
        this.add(bones)
        bones.pos = new Vector(Math.random() * 600, Math.random() * 400);
    }

    warnSans() {
        this.sans.warnSans()
        
    }

    onActivate(ctx) {
        console.log("the start scene is activated")
    }
}