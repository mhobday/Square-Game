import Scenes from "./game/Scenes.js"
import SceneManager from "./game/SceneManager.js"
import Engine from "./engine/Engine.js"

let sceneOne = new Scenes.SceneOne();
let sceneTwo = new Scenes.SceneTwo();

SceneManager.addScene(sceneOne);
SceneManager.addScene(sceneTwo);
SceneManager.currentScene = 0;


//Setup event handling
document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);
document.body.addEventListener('keypress', keypress);
document.body.addEventListener('mousedown', mousedown);
document.body.addEventListener('mouseup', mouseup);
document.body.addEventListener('mousemove', mousemove);

let Input = Engine.Base.Input;

function keydown(event){
    //console.log("keydown");
    //console.log(event.key);
    Input.keys[event.key] = true;
}

function keyup(event){
    //console.log("keyup");
    //console.log(event.keyCode);
    Input.keys[event.key] = false;
}

function keypress(event){
    //console.log("keypress");
    //console.log(`Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
}

function mousedown(event){
    //console.log(event.button);
    Input.keys[event.button] = true;
}

function mouseup(event){
    Input.keys[event.button] = false;
}
function mousemove(event){
    Input.mouseLocation[0] = event.clientX;
    Input.mouseLocation[1] = event.clientY;
}

var can = document.getElementById("canv");

/*function resizeCanvas() {
    can.style.width = window.innerWidth + "px";
    setTimeout(function () {
        can.style.height = window.innerHeight + "px";
    }, 0);
    can.width = window.innerWidth;
    can.height = window.innerHeight;

};


window.onresize = resizeCanvas;
*/

let canv, ctx;

function main() {
    canv = document.querySelector("#canv");
//    resizeCanvas();
    ctx = canv.getContext('2d');
    start();
    setInterval(gameLoop, 33);
}

function gameLoop() {
    despawn();
    update();
    draw(ctx);
}

function start()
{
    SceneManager.currentScene.start();
}

function despawn() {
    SceneManager.currentScene.despawn();
}

function update() {
    SceneManager.currentScene.update(Engine.Components.Collider, Engine.Components.CollisionHelper);
    Input.lastClick--;  
    if(Input.keys['0'] && Input.lastClick <= 0)
    {
        Input.lastClick = 10;
        SceneManager.currentScene.spawn();
    }  
}

function draw(ctx) {
    SceneManager.currentScene.draw(ctx, canv.width, canv.height);
}

main();

