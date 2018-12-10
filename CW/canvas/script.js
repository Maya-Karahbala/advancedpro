var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.height=214*3;
canvas.width=900;
// show x and y in consoly when you press in canvas useful for drawing
canvas.onmousedown=function(e){
	console.log("x :"+e.layerX+" y :"+e.layerY)
}
// 4 way to draw rectangle
ctx.fillStyle="red"
ctx.rect(24, 10, 80, 80);
ctx.fill();
ctx.rect(132, 10, 80, 80);
ctx.stroke();
ctx.fillStyle="yellow"
ctx.fillRect(24, 110, 80, 80);
ctx.strokeRect(132, 110, 80, 80);

//drawing horizantal line
//start point
ctx.moveTo(0,214)
//end point
ctx.lineTo(900,214)
ctx.lineWidth=5// change width for all elemnts except elemnt drew by
/// fillRect and strokeRect
ctx.stroke();
//drawing vertical line
ctx.moveTo(300,0)
ctx.lineTo(300,214*3)
ctx.stroke();
// second horizantal line
ctx.moveTo(0,214*2)
ctx.lineTo(600,214*2)
ctx.stroke();
///////////////////

      //(center x ,center y , r, starting angl ,ending angle , direction true by default
ctx.beginPath()
ctx.fillStyle="blue"
ctx.arc(80,323,50,0,180*Math.PI/180,true);
ctx.fill();
ctx.beginPath()
ctx.arc(160,323,50,0,120*Math.PI/180,false);
ctx.stroke();
// drawing trisngles
ctx.beginPath()
ctx.fillStyle="green"
ctx.moveTo(453,33)
ctx.lineTo(539,140)
ctx.lineTo(363,140)
//ctx.lineTo(453,33) this or 
ctx.closePath()
ctx.fill();
// drawing multiple lines using for

for (var i = 0; i < 10; i++) {
   ctx.lineWidth=1+1*i
   ctx.beginPath()
   ctx.moveTo(347+i*20,258)
   ctx.lineTo(347+i*20,386)
   ctx.stroke()	
}
// drawing smile face
ctx.beginPath()
ctx.lineWidth=1.5
ctx.arc(130 ,545,60,0,360*Math.PI/180 ,true);
ctx.stroke();
ctx.beginPath()
ctx.fillStyle="yellow"
ctx.arc(130 ,545,60,0,360*Math.PI/180,true);
ctx.fill();
// drawing eys
ctx.beginPath()
ctx.fillStyle="black"
ctx.arc(111 ,527,10,0,360*Math.PI/180,true);
ctx.fill();
ctx.beginPath()
ctx.arc(149 ,527,10,0,360*Math.PI/180,true);
ctx.fill();
// 
ctx.beginPath()
ctx.fillStyle="red"
ctx.arc(132 ,555,30,0,180*Math.PI/180,false);
ctx.fill();
//text in canvas
ctx.beginPath()
ctx.shadowOffsetX=10
ctx.shadowOffsetY=10
//ctx.shadowBlur=20
ctx.shadowColor="rgba(0,0,0,0.3)"
ctx.fillStyle="red"
ctx.lineWidth=3
ctx.textAlign="center"
ctx.font="bold 50px courier"
ctx.fillText("Canvas",443,540)


