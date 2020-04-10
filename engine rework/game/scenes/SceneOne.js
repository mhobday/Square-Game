import Base from "../../engine/Base.js"
import Player from '../prefabs/Player.js'
import Platform from "../prefabs/Platform.js";
import Bullet from "../prefabs/Bullet.js";
import Crosshair from "../prefabs/Crosshair.js"
import Components from "../../engine/Components.js";


export default class SceneOne extends Base.Scene {
  constructor() {
    super();
    let player = new Player(200, 200);
    this.children.push(player);

    let platform = new Platform(100, 100, 100, 50);
    this.children.push(platform);

    let platform2 = new Platform(200, 100, 100, 50);
    this.children.push(platform2);

    let platform3= new Platform(500, 580, 1080, 50);
    this.children.push(platform3);

    let crosshair = new Crosshair();
    this.children.push(crosshair);


  }
  spawn() {
    let bullet = new Bullet(this.children[0].x, this.children[0].y);
    this.children.push(bullet);
  }


}