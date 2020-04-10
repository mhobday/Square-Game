import NameableParent from "./NamableParent.js"
import PlayerCollider from "../components/PlayerCollider.js";

export default class Scene extends NameableParent {

    constructor() {
        super();

    }
    start() {
        this.children.filter(i => i.start).forEach(i => start);
    }

    despawn() {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].delete == true) {
                this.children.splice(i, 1);
            }
        }
    }

    draw(ctx, width, height) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);

        this.children.filter(i => i.draw).forEach(i => i.draw(ctx));

    }
    update(collidableType, collisionHelper) {
        this.children.filter(i => i.update).forEach(i => i.update());

        //Big collisions nonsense
        let collidables = [];
        this.getCollidable(this.children, collidables, collidableType);

        for(let i = 0; i < collidables.length; i++)
        {
            for(let j = 1; j < collidables.length; j++)
            {
                if(collisionHelper.inCollision(collidables[i], collidables[j]))
                {
                    let gameObject1 = collidables[i];
                    let gameObject2 = collidables[j];
                    
                    //decide what happens on collide
                }
            }
        } 
    }

    getCollidable(children, collidables, type) {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            try{
                let collidable = child.getComponent(type);
                if (collidable)
                {
                    collidables.push({collider:collidable, gameObject:child})
                }
            }
            catch(e){
                let x = 1;
            }
            //If you try to collide children go back to his scene code.
        }
    }
}