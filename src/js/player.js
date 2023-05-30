import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bone } from "./bones.js"
import { Bullet } from './bullet.js'
import { Gameover } from './scenes/gameover.js'

export class Player extends Bullet {
    game;

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
        this.game = engine;
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.game.addScene('Gameover', new Gameover())
        
    }

    hitSomething(event) {
        if (event.other instanceof Bone) {
            event.other.kill()
            this.game.goToScene('Gameover')
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
