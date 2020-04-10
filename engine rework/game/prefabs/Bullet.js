import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import BulletBehavior from "../behaviors/BulletBehavior.js"

export default class Bullet extends Base.GameObject{
  constructor(x, y) {
    super(x, y)
    let bulletComponent = new Components.CircleComponent(5, "green", "white");
    this.addComponent(bulletComponent);
    let bulletBehavior = new BulletBehavior();
    this.addComponent(bulletBehavior);
    bulletBehavior.start();
    let collider = new Components.CircleCollider(5);
    this.addComponent(collider);
  }

}

