import { Actor, Random, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bullet } from './bullet.js'
import { Victory } from './scenes/victory.js'

export class Sans extends Actor {

    game;
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
    onInitialize(engine) {
        this.game = engine;
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.game.addScene('victory', new Victory())

    }
    hitSomething(event) {
        if (event.other instanceof Bullet) {
            event.other.kill()
            this.game.goToScene('victory')
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