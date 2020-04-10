import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";

class BulletBehavior extends Base.Behavior {

    speed;
    xDirection;
    yDirection;
    magnitude;
    lifespan;

    start() {
        this.xDirection = 0;
        this.yDirection = 0;
        this.magnitude = 1;
        this.speed = 20;
        this.lifespan = 100;
        let bullet = this.gameObject;

        this.xDirection = Input.mouseLocation[0] - bullet.x;
        this.yDirection = Input.mouseLocation[1] - bullet.y;
        this.magnitude = Math.sqrt(Math.pow(this.xDirection, 2) + Math.pow(this.yDirection, 2));
    }
    update() {
        let bullet = this.gameObject;

        bullet.x += (this.xDirection / this.magnitude) * this.speed;
        bullet.y += (this.yDirection / this.magnitude) * this.speed;

        this.lifespan--;
        if (this.lifespan < 0) {
            this.gameObject.delete = true;
        }
    }


}

export default BulletBehavior;