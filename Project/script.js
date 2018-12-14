
var boxes=[];
var positions=[0,300,600,900]
var duration
var bekleme
var firstBox
var numberOfSwap
var cycleNo=0
var ranPos
var finish=false// for control only one time after game terminated
var start=true// for prevent starting next game before finishing the first 
var ball=document.getElementById("ball1")
var gameOvaer=document.getElementById("gameOvaer")
var youWin=document.getElementById("youWin")


let boxName;
for (let i = 0; i <4; i++) {
	boxName="box"+i
	boxes.push(document.getElementById(boxName))
	boxes[i].position=i
}
// each box has positon array to transform in the true direction
boxes[0].boxPositions=[0,300,600,900]
boxes[1].boxPositions=[-300,0,300,600]
boxes[2].boxPositions=[-600,-300,0,300]
boxes[3].boxPositions=[-900,-600,-300,0]
function moveBoxUp(box){
	box.style.transitionDuration='1s';
	box.style.transform = "translateY(-60%)";
}
function moveBoxDown(box){
	box.style.transitionDuration='1s';
	box.style.transform = "translateY(0%)";
}
function moveUpDown(box){
	box.style.transitionDuration=duration;
	setTimeout(function(){
		box.style.transform = "translateY(-60%)";
		setTimeout(function(){
			box.style.transform = "translateY(0%)";
		},1000);
	},1000);
}
function moveto(box,position){
	box.position=position
	box.style.transitionDuration=duration;
	box.style.transform ="translateX("+box.boxPositions[position]+"px)" 
}
function moveBallToStartPoint(){
       // ball.style.marginLeft= boxes[ranPos].boxPositions[ranPos]+"px";
       ball.style.transform ="translateX("+positions[boxes[ranPos].position]+"px)"
   }
   function moveBallTo(position){
   	ball.style.transform ="translateX("+positions[position]+"px)"
   }
   function swap(){
   	let randfrom=Math.round(Math.random() * (3 - firstBox))+firstBox

   	let randto=Math.round(Math.random() * (3 - firstBox))+firstBox
   	while(randfrom==randto)randto=Math.round(Math.random() * (3 - firstBox))+firstBox
   		let b,b1,b2
   	for(b of boxes){
   		if(b.position==randfrom)b1=b
   			else if(b.position==randto)b2=b
   		}
   	moveto(b2,randfrom)
   	moveto(b1,randto)
   }


	function multipleSwap(){
		if(cycleNo<numberOfSwap){
			setTimeout(function(){
				swap();
				cycleNo++
				multipleSwap()
			},bekleme);
		}
		else{finish=true
			 start=true
		    }
	}
	function reset(){
 					for (let i = 0; i <4; i++) {
 						moveto(boxes[i],i)
 					}
 					ranPos=Math.round(Math.random() * (3 - firstBox))+firstBox
 					moveBallTo(ranPos)
         
 				}
function hideControlImages(){
   youWin.style.transitionDuration='0s';
    gameOvaer.style.transitionDuration='0s';
 gameOvaer.style.visibility = "hidden"
 youWin.style.visibility = "hidden"
}
   //start the game
   function newGame(){

   	reset()

   	setTimeout(function(){
   		ball.style.visibility = "visible"
   		moveBoxUp(boxes[ranPos])
   		setTimeout(function(){
   			moveBoxDown(boxes[ranPos])
   			setTimeout(function(){
 						ball.style.visibility = "hidden"
 						cycleNo=0
 						multipleSwap()

 					},1000);
   		},1000);
   	},1000);


   }
   function easyGame(){
    hideControlImages()
    if(start) { 
    start=false 
    boxes[0].style.transitionDuration='0s'; 
   	boxes[0].style.visibility = "hidden"
   	duration='1s'
   	bekleme=1000
   	numberOfSwap=5
   	firstBox=1
   	newGame()
    }
   }
   function medGame(){
    hideControlImages()
    if(start){
    start=false
   	duration='1s'
   	bekleme=1000
   	numberOfSwap=10
   	firstBox=0
   	boxes[0].style.visibility = "visible"
   	newGame()
    }
   }
   function hardGame(){
    hideControlImages()
    if(start){
    start=false
   	boxes[0].style.visibility = "visible"
   	duration='.5s'
   	bekleme=500
   	numberOfSwap=15
   	firstBox=0
   	newGame()
    }
   }
   function control(selectedBox){
   	if(finish==true){
   	moveBallToStartPoint()
   	let selectedPos=boxes[selectedBox].position
   	if(ranPos==selectedBox){
   		
   		//
   		for (let i = 0; i <4; i++) {
   			boxes[i].position=i
   			boxes[i].style.transitionDuration="0s";
   			boxes[i].style.transform ="translateX("+boxes[i].boxPositions[i]+"px)" 
   		}
   		//
   		ball.style.visibility = "visible"
   		//moveto(boxes[ranPos],boxes[ranPos].position)
   		moveBoxUp(boxes[selectedPos])
   		console.log("you win")
      //alert('You won the game, congratulations!');
      youWin.style.visibility = "visible"
      youWin.style.transitionDuration='1s';
      youWin.style.transform = "scaleY(2)";
   	}
   	else{
   		for (let i = 0; i <4; i++) {
   			boxes[i].position=i
   			boxes[i].style.transitionDuration="0s";
   			boxes[i].style.transform ="translateX("+boxes[i].boxPositions[i]+"px)" 
   		}
   		moveBoxUp(boxes[selectedPos])
   		console.log("game over")
      //alert('You won the game, congratulations!');
      gameOvaer.style.visibility = "visible"
      gameOvaer.style.transitionDuration='1s';
      gameOvaer.style.transform = "scaleY(2)";
   	}
   	finish=false
   console.log("control kapalı ")
   }
   


   }