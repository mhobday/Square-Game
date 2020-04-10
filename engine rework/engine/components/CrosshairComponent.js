import Base from "../Base.js"

class CrosshairComponent extends Base.Component{
    radius;
    stroke;
    constructor(radius, stroke){
        super();
        this.radius = radius;
        this.stroke = stroke;
    }
    draw(ctx){
        ctx.save();
        ctx.strokeStyle = this.stroke;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
        ctx.stroke();
        ctx.restore();
    }
    update(){

    }
}

export default CrosshairComponent;