import Base from "../Base.js"
import Collider from "./Collider.js";

export default class PlayerCollider extends Collider{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
}