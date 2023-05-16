import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Sans extends Actor {

    constructor() {
        super({
            width: Resources.Sans.width,
            height: Resources.Sans.height
        });
        // const playerOne = new Actor()
        this.graphics.use(Resources.Sans.toSprite());
        this.pos = new Vector(585, 200);
        this.scale = new Vector(0.1, 0.1);

    }
    onInitialize() {
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => {
            this.pos = new Vector(Math.random() * 600, Math.random() * 200)
        })
        //this.on('collisionstart', (event) => this.hitSomething(event))
    }
    // hitSomething(event){   
    //   console.log("OUCH! i got hit by the bullet!!")

    //   if (event.other instanceof Bullet) {
    //     event.other.kill()
    // }
    // }

}