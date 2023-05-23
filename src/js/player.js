import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bone } from "./bones.js"
import { Bullet } from './bullet.js'

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
        if (event.other instanceof Bone) {
            event.other.kill()
        }
    }

  

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        let bullet = new Bullet();
        

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = -300
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            yspeed = 300
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.currentScene.add(bullet)
            bullet.pos = this.pos;
            engine.currentScene.warnSans()
        }

        this.vel = new Vector(xspeed, yspeed)
    }
}
