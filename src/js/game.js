import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Start } from './scenes/startscreen.js'
import { Settings } from './scenes/settingsscreen.js'



export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    // this.showDebug(true)
    this.start(ResourceLoader).then(() => this.startGame());
    // this.player(ResourceLoader).then(() => this.Player());
  }

  startGame() {
    this.addScene('settings', new Settings())
    this.addScene('start', new Start())

    this.goToScene('settings')

    

   

   
  }

}

new Game();
