import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Player } from './player'
import { Sans } from './sans'

export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    this.start(ResourceLoader).then(() => this.startGame());
    // this.player(ResourceLoader).then(() => this.Player());
  }

  startGame() {
    let player = new Player();
    this.add(player);

    let sans = new Sans();
    this.add(sans);

    for (let i = 0; i < 100; i++) {
        let bone = new Actor()
        bone.graphics.use(Resources.Bone.toSprite());
        // fish.pointer.useGraphicsBounds = true;
        // fish.enableCapturePointer = true;
        bone.pos = new Vector(Math.random() * 800 , Math.random() * 600);
        bone.vel = new Vector(Math.random() * -10 , Math.random() * 10);
        bone.scale = new Vector(0.1, 0.1);
        this.add(bone);
        bone.pointer.useGraphicsBounds = true;
        bone.enableCapturePointer = true;
        bone.on("pointerup", function (e) {
            bone.kill();
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
