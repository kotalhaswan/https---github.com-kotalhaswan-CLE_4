import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bone } from "./bones.js"
import { Sans } from './sans'

export class Bullet extends Actor{
    constructor() {
        super({
            width: Resources.Bullet.width,
            height: Resources.Bullet.height
        });
        this.graphics.use(Resources.Bullet.toSprite());
        this.pos = new Vector(220, 200);
        this.vel = new Vector(400,3);
        this.scale = new Vector(0.1, 0.1);
    } 
        onInitialize(){
            this.on('collisionstart', (event) => this.hitSomething(event))
            this.on('collisionstart', (event) => this.hitSans(event))
            this.pointer.useGraphicsBounds = true;
            this.enableCapturePointer = true;
            this.on("pointerup", function (e) {
              this.kill();
            });
        }
        hitSomething(event) {
    
            if (event.other instanceof Bone) {
                event.other.kill()
            }
        }

        hitSans(event) {

            if (event.other instanceof Sans) {
                event.other.kill()
            }
        }
       
      }