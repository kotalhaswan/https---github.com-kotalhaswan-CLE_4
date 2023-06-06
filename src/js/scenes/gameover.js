import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
// import { Start } from './scenes/startscreen.js'

export class Gameover extends Scene {
    constructor() {
        super({ width: 640, height: 480 });
    }

    onInitialize(engine) {
        console.log ("bruh im dead")
        Resources.backgroundMusic.stop(0.3)
        Resources.gameoverMusic.play(0.3)
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        
        let textField = new Label({
            text: "You died! Restart the page to try again",
            pos: new Vector(50, 100),
            font: new Font({
              family: "Determination Mono Web Regular",
              size: 26,
              color: Color.White,
              unit: FontUnit.Px
            }),
          });
    this.add(textField);

    let underField = new Label({
      text: "seriously, how'd you fuck that up?",
      pos: new Vector(150, 300),
      font: new Font({
        family: "Determination Mono Web Regular",
        size: 15,
        color: Color.White,
        unit: FontUnit.Px
      }),
    });
this.add(underField);
      
    }
    
}