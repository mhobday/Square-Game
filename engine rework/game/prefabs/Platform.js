import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import PlatformBehavior from "../behaviors/PlatformBehavior.js"

export default class Platform extends Base.GameObject{
  constructor(x, y, width, height) {
    super(x, y)
    let platformComponent = new Components.RectangleComponent(width, height, "blue", "white");
    this.addComponent(platformComponent);
    let platformBehavior = new PlatformBehavior();
    this.addComponent(platformBehavior);
    let platformCollider = new Components.RectangleCollider(width, height);
    this.addComponent(platformCollider);
  }

}