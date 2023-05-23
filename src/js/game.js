import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Player } from './player'
import { Sans } from './sans'
import { Bone } from './bones'
import { HealthBar } from './healthBar.js'


export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    // this.showDebug(true)
    this.start(ResourceLoader).then(() => this.startGame());
    // this.player(ResourceLoader).then(() => this.Player());
  }

  startGame() {
    Resources.backgroundMusic.play(0.7)


    const background = new Actor();
    background.graphics.use(Resources.Background.toSprite());
    background.pos = new Vector(500, 400);
    background.scale = new Vector(3, 3);

    this.add(background);
    let player = new Player();
    this.add(player);

    this.sans = new Sans();
    this.add(this.sans);

    let bones = new Bone();
    this.add(bones)

    new HealthBar()

    const textbox = new Actor();
    textbox.graphics.use(Resources.Text.toSprite());
    textbox.pos = new Vector(320, 400);
    textbox.scale = new Vector(1, 1);
    this.add(textbox);

    const timer = new Timer({
      fcn: () => console.log('Every second'),
      repeats: true,
      interval: 1000,
    })
    
    this.currentScene.add(timer)
    
    timer.start()

  }

  
  warnSans() {
    this.sans.warnSans()
  }
}

new Game();
