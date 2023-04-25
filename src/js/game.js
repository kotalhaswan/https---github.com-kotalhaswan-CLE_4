import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const sans = new Actor();
    sans.graphics.use(Resources.Sans.toSprite());
    sans.pos = new Vector(300, 200);
    sans.scale = new Vector(0.2, 0.2);
    this.add(sans);


    for (let i = 0; i < 100; i++) {
        let fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite());
        // fish.pointer.useGraphicsBounds = true;
        // fish.enableCapturePointer = true;
        fish.pos = new Vector(Math.random() * 800 , Math.random() * 600);
        fish.vel = new Vector(Math.random() * -10 , Math.random() * 10);
        fish.scale = new Vector(0.1, 0.1);
        this.add(fish);
        fish.pointer.useGraphicsBounds = true;
        fish.enableCapturePointer = true;
        fish.on("pointerup", function (e) {
            fish.kill();
        });
        }
        const textbox = new Actor();
        textbox.graphics.use(Resources.Text.toSprite());
        textbox.pos = new Vector(320, 400);
        textbox.scale = new Vector(1,1);
        this.add(textbox);
  }
  
}

new Game();
