import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";



export class Powerup extends Actor{
    constructor() {
        super({
            width: Resources.Powerup.width,
            height: Resources.Powerup.height
        });
        this.graphics.use(Resources.Powerup.toSprite());
        this.pos = new Vector(400, 200);
        this.vel = new Vector(-35,1);
        this.scale = new Vector(0.1, 0.1);
    } 
        onInitialize(){
            // this.on('collisionstart', (event) => this.hitSomething(event))
            this.pointer.useGraphicsBounds = true;
            this.enableCapturePointer = true;
            this.on("pointerup", function (e) {
              this.kill();
              console.log("powerup!")
            });
            
        }
       
      }