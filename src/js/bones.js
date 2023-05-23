import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Player } from './player'

export class Bone extends Actor{
    constructor() {
        super({
            width: Resources.Bone.width,
            height: Resources.Bone.height
        });
        this.graphics.use(Resources.Bone.toSprite());
        this.pos = new Vector(200, 200);
        this.vel = new Vector(-10,1);
        this.scale = new Vector(0.1, 0.1);
    } 
        onInitialize(){
            this.on('collisionstart', (event) => this.hitSomething(event))
            this.pointer.useGraphicsBounds = true;
            this.enableCapturePointer = true;
            this.on("pointerup", function (e) {
              this.kill();
            });
            
        }
        hitSomething(event) {
    
            if (event.other instanceof Player) {
                event.other.kill()
            }
        }
       
      }