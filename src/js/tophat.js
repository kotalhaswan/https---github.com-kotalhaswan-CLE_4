import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";



export class TopHat extends Actor{
    constructor() {
        super({
            width: Resources.Tophat.width,
            height: Resources.Tophat.height
        });
        console.log('hoedje :]')
        this.graphics.use(Resources.Tophat.toSprite());
        this.scale = new Vector(2, 2);
        this.pos = new Vector(0,-350)
    }        
}