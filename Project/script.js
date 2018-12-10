
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");	
canvas.width = 1131;
canvas.height = 700;
// show x and y in consoly when you press in canvas useful for drawing
canvas.onmousedown=function(e){
console.log("x :"+e.layerX+" y :"+e.layerY)


}
var img=new Image();
img.src="pictures/bg2.jpg"
window.onload = function() {
   ctx.drawImage(img,0,200,1131,700,0,0,1131,700);
    
};