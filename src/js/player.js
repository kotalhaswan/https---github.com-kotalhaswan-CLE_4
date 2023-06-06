import { Actor, Vector, Input, Timer } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bone } from "./bones.js"
import { Bullet } from './bullet.js'
import { Powerup } from './powerup.js'
import { TopHat } from './tophat.js'
import { Gameover } from './scenes/gameover.js'

export class Player extends Actor {
    game;
    hoedje

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
        // this.on('collisionstart', (event) => this.hitPower(event))
        this.hoedje = new TopHat()

        this.addChild(this.hoedje)

        const timer = new Timer({
            fcn: () => this.spawnPowers(),
            repeats: true,
            interval: 3000,
        })

        this.game.currentScene.add(timer)

        timer.start()
        
    }

    spawnPowers() {
        let powerup = new Powerup();
        this.game.currentScene.add(powerup)
        powerup.pos = new Vector(Math.random() * 200, Math.random() * 300);

    }

    hitSomething(event) {
        if (event.other instanceof Bone) {
            event.other.kill()
            this.game.goToScene('gameover')
        }
  
        if (event.other instanceof Powerup) {
           console.log('yummy yummy')
        }
    }

  

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        let bullet = new Bullet();
        let controller = engine.input.gamepads
        

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up) || controller.at(0).getAxes(Input.Axes.RightStickY) < -0.5) {
            yspeed = -300
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down) || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
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
