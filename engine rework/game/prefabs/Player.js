import  Components from "../../engine/Components.js"
import Base from "../../engine/Base.js"
import ArrowMoveBehavior from "../behaviors/ArrowMoveBehavior.js";
import ShootMomentumBehavior from "../behaviors/ShootMomentumBehavior.js";


export default class Player extends Base.GameObject {
  constructor(x, y) {
    super(x, y);
    let playerComponent = new Components.RectangleComponent(50, 50, "red", "white");
    this.addComponent(playerComponent);
    let playerBehavior = new ArrowMoveBehavior();
    this.addComponent(playerBehavior);
    let playerMomentum = new ShootMomentumBehavior();
    this.addComponent(playerMomentum);
    playerMomentum.start();
    let collider = new Components.PlayerCollider(50,50);
    this.addComponent(collider);
  }

}