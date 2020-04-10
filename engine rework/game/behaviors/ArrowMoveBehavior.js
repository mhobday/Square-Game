import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";

class ArrowMoveBehavior extends Base.Behavior {


    start() {
        let left = false;
        let up = false;
        let right = false;
        let down = false;
    }
    update() {
        let character = this.gameObject;
        character.left = (Input.keys['ArrowLeft'] || Input.keys['a']);
        character.right = (Input.keys['ArrowRight']|| Input.keys['d']);
        character.up = (Input.keys['ArrowUp'] ||  Input.keys['w']);
        character.down = (Input.keys['ArrowDown'] || Input.keys['s']);

        if (character.left) {
            character.x -= 5;
        }
        if (character.right) {
            character.x += 5;
        }
        if (character.up) {
            character.y -= 5;
        }
        if (character.down) {
            character.y += 5;
        }
        character.x += Movement.x;
        character.y += Movement.y
    }


}

export default ArrowMoveBehavior;