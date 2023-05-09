import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Player extends Actor {
    
    constructor(){
        super();
        
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(20, 200);
        this.scale = new Vector(0.1, 0.1);
        
    }
  }