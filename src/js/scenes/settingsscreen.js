import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, Input, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Start } from './startscreen.js'

export class Settings extends Scene {
    game;
    constructor() {
        super({ width: 640, height: 480 });
    }

    onInitialize(engine) {
        console.log("how to play")
        this.game = engine;
        Resources.settingMusic.play(0.7)
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        //text field:
        let bigText1 = new Label({
            text: "How to play",
            pos: new Vector(90, 100),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 80,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        let bigText2 = new Label({
            text: "Press spacebar to start killing!",
            pos: new Vector(30, 380),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 37,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        let textField1 = new Label({
            text: "Move up and down with the arrow keys",
            pos: new Vector(90, 200),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        let textField2 = new Label({
            text: "Shoot with spacebar",
            pos: new Vector(90, 250),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(bigText1);
        this.add(bigText2);
        this.add(textField1);
        this.add(textField2);
        this.game.addScene('start', new Start())


    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.game.goToScene('start')
        }
    }
}