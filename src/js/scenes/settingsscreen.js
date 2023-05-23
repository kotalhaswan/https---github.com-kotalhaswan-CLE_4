import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
// import { Start } from './scenes/startscreen.js'

export class Settings extends Scene {
    constructor() {
        super({ width: 640, height: 480 });
    }

    onInitialize(engine) {
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        this.addScene('start', new Start())
    }
}