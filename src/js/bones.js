import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

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
            this.pointer.useGraphicsBounds = true;
            this.enableCapturePointer = true;
            this.on("pointerup", function (e) {
              this.kill();
            });
        }
       
      }