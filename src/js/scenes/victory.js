import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
// import { Start } from './scenes/startscreen.js'

export class Victory extends Scene {
    constructor() {
        super({ width: 640, height: 480 });
    }

    onInitialize(engine) {
        console.log ("bruh i won!!!")
        Resources.backgroundMusic.stop(0.7)
        Resources.victoryMusic.play(0.7)

        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);

        let textField = new Label({
            text: "Goodjob!!",
            pos: new Vector(170, 100),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 70,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(textField);

        let secondText = new Label({
            text: "Sadly, thats all there is to this game",
            pos: new Vector(100, 200),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 26,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(secondText);

        let thirdText = new Label({
            text: "...it do be a demo for school....",
            pos: new Vector(150, 300),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 15,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(thirdText);

        let thanksText = new Label({
            text: "Thanks for playing!",
            pos: new Vector(120, 400),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 26,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(thanksText);

        const victoryImage = new Actor();
        victoryImage.graphics.use(Resources.victoryImage.toSprite());
        victoryImage.pos = new Vector(500, 300);
        victoryImage.scale = new Vector(0.5, 0.5);
        this.add(victoryImage);
    }
}