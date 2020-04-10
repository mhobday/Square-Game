import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"

class CrosshairBehavior extends Base.Behavior {


    start() {
        this.gameObject.x = 0;
        this.gameObject.y = 0;
        let radius = this.gameObject.getComponent(Components.CrosshairComponent).radius;
    }
    update() {
        let radius = this.gameObject.getComponent(Components.CrosshairComponent).radius;
        let crosshair = this.gameObject;
        crosshair.x = Base.Input.mouseLocation[0] - (radius/2 - 5);
        crosshair.y = Base.Input.mouseLocation[1] - (radius/2 -5);
    }


}

export default CrosshairBehavior;