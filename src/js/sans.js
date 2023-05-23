import { Actor, Random, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bullet } from './bullet.js'

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

        
        this.random = new Random(1337)

    }
    onInitialize() {
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => {
            this.pos = new Vector(Math.random() * 600, Math.random() * 200)
        })

    }
    hitSomething(event) {
        if (event.other instanceof Bullet) {
            event.other.kill()
        }
    }

    warnSans() {
        console.log("warnSans");
        
        let dodgeBullet = this.random.integer(0, 2)

        switch (dodgeBullet) {
            case 0:
                this.pos = new Vector(585, 50);
                break;
            case 1: 
                this.pos = new Vector(585, 200);
                break;
            case 2: 
                this.pos = new Vector(585, 400);
                break;
            default:
                break;
        }
    }

    onPreUpdate(engine, delta) {
        // counter die opgehoogd wordt
        // this.counter += delta
        // // als de counter 
        // if(this.counter > 1000) {
        //     this.pos = new Vector(585, 200);
        // }
    }
}