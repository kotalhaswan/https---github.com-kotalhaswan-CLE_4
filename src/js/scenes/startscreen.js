import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Player } from '../player'
import { Sans } from '../sans'
import { HealthBar } from '../healthBar.js'


export class Start extends Scene {
    game;
    score = 0
    scoreText

    constructor() {
        super({ width: 640, height: 480 });
    }
    

    onInitialize(engine) {
        this.game = engine;
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        let player = new Player();
        this.add(player);

        this.scoreText = new Label({
            text: 'Time start!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 28,
                color: Color.White,
            }),
            pos: new Vector(250, 100)
        })
        this.add(this.scoreText)

        this.sans = new Sans();
        this.add(this.sans);
        Resources.settingMusic.stop(0.3)
        Resources.backgroundMusic.play(0.3)


        new HealthBar()

        const textbox = new Actor();
        textbox.graphics.use(Resources.Text.toSprite());
        textbox.pos = new Vector(320, 400);
        textbox.scale = new Vector(1, 1);
        this.add(textbox);

      

        const timer2 = new Timer({
            fcn: () => this.updateScore(),
            repeats: true,
            interval: 1000,
        })

        this.add(timer2)

        timer2.start()
    }
 

    warnSans() {
        this.sans.warnSans()
        
    }

    updateScore() {
        this.score++
        let data = {
            score : this.score
        }
        this.scoreText.text = `Time passed: ${this.score}`
        localStorage.setItem("score", JSON.stringify(data))

        this.game.score = this.score
    }

    // localStorage.setItem("score", JSON.stringify(data))
}