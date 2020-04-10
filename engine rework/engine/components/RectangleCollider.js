import Base from "../Base.js"
import Collider from "./Collider.js";

export default class RectangleCollider extends Collider{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
}