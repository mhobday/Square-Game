import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";

class ShootMomentumBehavior extends Base.Behavior {

    xDirection;
    yDirection;
    magnitude;
    accX;
    accY;
    accSpeed;
    velocityX;
    velocityY;
    dragValue;
    dragFloor;

    start() {
        this.xDirection = 0;
        this.yDirection = 0;
        this.magnitude = 1;
        this.accX = 0;
        this.accY = 0;
        this.accSpeed = -20;
        this.velocityX = 0;
        this.velocityY = 0;
        this.dragValue = .1;
        this.dragFloor = this.accSpeed * this.dragValue;

    }

    update() {
        let player = this.gameObject;
        this.accX = 0;
        this.accY = 0;
        if(Input.keys['0'] && Input.lastClick <= 1)
        {
            this.xDirection = Input.mouseLocation[0] - player.x;
            this.yDirection = Input.mouseLocation[1] - player.y;
            this.magnitude = Math.sqrt(Math.pow(this.xDirection, 2) + Math.pow(this.yDirection, 2));
            this.accX = (this.xDirection / this.magnitude) * this.accSpeed;
            this.accY = (this.yDirection / this.magnitude) * this.accSpeed;
        }
        this.velocityX += this.accX;
        this.velocityY += this.accY;
        player.x += this.velocityX;
        player.y += this.velocityY;
        this.velocityX = this.drag(this.velocityX);
        this.velocityY = this.drag(this.velocityY);

    }

    drag(velocity)
    {
        if((this.dragFloor) > velocity && velocity > !(this.dragFloor))
        {
            velocity = 0;
        }
        else if(velocity > 0)
        {
            velocity -= velocity * this.dragValue;
        }
        else if(velocity != 0)
        {
            velocity -= velocity * this.dragValue;
        }
        return velocity;
    }
}

export default ShootMomentumBehavior;