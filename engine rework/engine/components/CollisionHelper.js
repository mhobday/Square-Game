import CircleCollider from "./CircleCollider.js"
import RectangleCollider from "./RectangleCollider.js";
import PlayerCollider from "./PlayerCollider.js";


export default class CollisionHelper{
        static inCollision(one, two){
            if(one.collider instanceof CircleCollider && two.collider instanceof RectangleCollider)
            {
               let squareDistance = Math.sqrt(Math.pow((one.gameObject.x - two.gameObject.x), 2)
                + Math.pow((one.gameObject.y - two.gameObject.y), 2));
                let outerCircle = 0;
                let innerCircle = 0;
                if (two.collider.height > two.collider.width)
                {
                    outerCircle = two.collider.height;
                    innerCircle = two.collider.width;
                }
                else
                {
                    outerCircle = two.collider.width;
                    innerCircle = two.collider.height;
                }
                if(squareDistance > outerCircle)
                {
                    return false;
                }
                else if(squareDistance < (innerCircle - 2))
                {
                    one.gameObject.delete = true;
                    return true;
                }


            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof CircleCollider)
            {
                this.inCollision(two, one);
            }
            else if(one.collider instanceof PlayerCollider && two.collider instanceof RectangleCollider)
            {
                if(one.gameObject.x < two.gameObject.x + two.collider.width
                     && one.gameObject.x + one.collider.width > two.gameObject.x 
                     && one.gameObject.y < two.gameObject.y + two.collider.height
                     && one.gameObject.y + one.collider.height > two.gameObject.y)
                     {
                         
                         console.log("width " + two.gameObject.getComponent(RectangleCollider).width + ":" + two.collider.width);
                         console.log("height " + two.gameObject.getComponent(RectangleCollider).height + " : " + two.collider.height);
                         console.log("x " + two.gameObject.x);
                         console.log("y " + two.gameObject.x);
                         return true;
                     }
            }
            else if(one.collider instanceof RectangleCollider && two.collider instanceof PlayerCollider)
            {
                this.inCollision(two, one);
            }
        }
    
}