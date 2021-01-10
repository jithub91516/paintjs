const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c"; 
ctx.lineWidth = 2.5;

let painting = false;

function StopPainting(){
    painting = false;
}

function StartPainting(){
    painting = true;
}

function OnMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    // console.log(x,y);
}

function OnMouseDown(event){
    // console.log(event);
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove", OnMouseMove);
    canvas.addEventListener("mousedown", StartPainting);
    canvas.addEventListener("mouseup", StopPainting);
    canvas.addEventListener("mouseleave", StopPainting);
}