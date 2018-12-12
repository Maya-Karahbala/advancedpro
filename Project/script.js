
var boxes=[];
var positions=[0,300,600,900]
var duration
var bekleme
var firstBox
var numberOfSwap
var cycleNo=0
var ranPos
var ball=document.getElementById("ball1")

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
// random number between 3 amd 0 for random positon of top

//ball.style.marginLeft= (positions[ranPos]+80)+"px";
//ball.style.transform ="translateX("+positions[ranPos]+"px)"

function moveBoxUp(box){
	box.style.transitionDuration='1s';
	box.style.transform = "translateY(-60%)";
}
function moveBoxDown(box){
	box.style.transitionDuration='1s';
	box.style.transform = "translateY(0%)";
}

// move onle box above ball
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
      //  ball.style.marginLeft= boxes[ranPos].boxPositions[boranPosxes[ranPos].position]+"px";
		//ball.style.transform ="translateX("+boxes[ranPos].boxPositions[position]+"px)"
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
	}
	function reset(){
		
 					//ball.style.visibility = "hidden"
 					for (let i = 0; i <4; i++) {
 						boxes[i].position=i
 						moveto(boxes[i],i)
 					}
 					
 						ranPos=Math.round(Math.random() * (3 - firstBox))+firstBox
 						moveBallTo(ranPos)
 					    //ball.style.marginLeft= (positions[ranPos]+80)+"px";
 					  // boxes[ranPos].boxPositions[ranPos]
                        //  ball.style.marginLeft= boxes[ranPos].boxPositions[ranPos]+"px";
                   
 				


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
 						//ball.style.visibility = "hidden"
 						cycleNo=0
 						multipleSwap()

 					},1000);
 			},1000);
 		},1000);
 

}
function easyGame(){
	boxes[0].style.visibility = "hidden"
	duration='1s'
	bekleme=1000
	numberOfSwap=5
	firstBox=1
	newGame()
	
}
function medGame(){
    
	duration='1s'
	bekleme=1000
	numberOfSwap=10
	firstBox=0
	boxes[0].style.visibility = "visible"
	newGame()
	
}
function hardGame(){
	boxes[0].style.visibility = "visible"
	duration='.5s'
	bekleme=500
	numberOfSwap=15
	firstBox=0
	newGame()
	
}
function control(selectedBox){
	moveBallToStartPoint()
	if(ranPos==selectedBox){
		ball.style.visibility = "visible"
		moveBoxUp(boxes[ranPos])
		console.log("you win")
	}
	else{
		console.log("game over")
	}


}