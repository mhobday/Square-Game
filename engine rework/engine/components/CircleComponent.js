import Base from "../Base.js"

class CircleComponent extends Base.Component{
    radius;
    stroke;
    fill;
    constructor(radius, fill, stroke){
        super();
        this.radius = radius;
        this.stroke = stroke;
        this.fill = fill;
    }
    draw(ctx){
        ctx.save();
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    update(){

    }
}

export default CircleComponent;