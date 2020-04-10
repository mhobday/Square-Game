import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import CrosshairBehavior from "../behaviors/CrosshairBehavior.js"

export default class Platform extends Base.GameObject{
  constructor(x, y) {
    super(x, y)
    let crosshairComponent = new Components.CrosshairComponent(10, "green");
    let crosshairBehavior = new CrosshairBehavior();
    this.addComponent(crosshairComponent);
    this.addComponent(crosshairBehavior);

  }

}