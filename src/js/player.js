import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Sans } from "./sans.js"

export class Player extends Actor {

    constructor() {
        super({
            width: Resources.Player.width,
            height: Resources.Player.height
        });
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(20, 200);
        this.scale = new Vector(0.05, 0.05);
    }

    onInitialize(engine){
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        console.log("I hit something!")

        if (event.other instanceof Sans) {
            event.other.kill()
        }
    }


    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = -300
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = 300
        }

        this.vel = new Vector(xspeed, yspeed)
    }

}
