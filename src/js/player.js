import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Player extends Actor {
    
    constructor(){
        super();
        
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(20, 200);
        this.scale = new Vector(0.1, 0.1);
        
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

        this.vel = new Vector(xspeed,yspeed)
    }
}
