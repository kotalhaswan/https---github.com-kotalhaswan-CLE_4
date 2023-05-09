import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Sans extends Actor {
    
    constructor(){
        super();
        // const playerOne = new Actor()
        this.graphics.use(Resources.Sans.toSprite());
        this.pos = new Vector(585, 200);
        this.scale = new Vector(0.1, 0.1);
        
    }
    onInitialize(){
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event)=>{
            this.pos = new Vector(Math.random() * 600 , Math.random() * 200)
        })
    }
    
  }