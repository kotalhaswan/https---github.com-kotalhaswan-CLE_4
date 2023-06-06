import { Actor, Random, Vector, Timer } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bullet } from './bullet.js'
import { Bone } from './bones.js'
import { Enemy } from './enemy.js'
import { Victory } from './scenes/victory.js'

export class Sans extends Enemy {

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

        const timer = new Timer({
            fcn: () => this.spawnBones(),
            repeats: true,
            interval: 1000,
        })

        this.game.currentScene.add(timer)

        timer.start()

    }

      
    spawnBones() {
        let bones = new Bone();
        this.game.currentScene.add(bones)
        bones.pos = new Vector(Math.random() * 600 + 200, Math.random() * 400);
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
                this.actions.moveTo (new Vector(585, 50),200);
                break;
            case 1: 
                this.actions.moveTo (new Vector(585, 200),200);
                break;
            case 2: 
                this.actions.moveTo (new Vector(585, 400),200);
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