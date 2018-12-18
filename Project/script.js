
var boxes=[];
var duration // speed of the game
var bekleme
var firstBox  // for controling differences when there is 3 boxes or 4 boxes
var numberOfSwap // number of shuffles done like counter
var cycleNo=0 // number of shuffles in the game
var ranPos // for generating random ball position 
var finish=false// for allow control only one time after game terminated
var start=true// for prevent starting next game before finishing the first 
var ball=document.getElementById("ball1")
var gameOvaer=document.getElementById("gameOvaer")
var youWin=document.getElementById("youWin")

// fill boxes array
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
function moveto(box,position){
	box.position=position
	box.style.transitionDuration=duration;
	box.style.transform ="translateX("+box.boxPositions[position]+"px)" 
}
function moveBallToStartPoint(){
  ball.style.transform ="translateX("+boxes[0].boxPositions[boxes[ranPos].position]+"px)"
}
function moveBallTo(position){
  ball.style.transform ="translateX("+boxes[0].boxPositions[position]+"px)"
}
// swap tow poxes
    function swap(){
      //genereate random positon to move box whithe generated position
      let randfrom=Math.round(Math.random() * (3 - firstBox))+firstBox
      // generate second random position
      let randto=Math.round(Math.random() * (3 - firstBox))+firstBox
      // if generated positons are equal  generate until you get different numbers
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
  // move boxes to start positions
  for (let i = 0; i <4; i++) {
   moveto(boxes[i],i)
 }
 // show ball in random position
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
// make the ball visible for one second move that box up and down then start multiple swap
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
    ballPosition=boxes[ranPos].position
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
      setTimeout(function(){
        ball.style.visibility = "visible"
      moveBoxUp(boxes[selectedPos])
      youWin.style.visibility = "visible"
      youWin.style.transitionDuration='1s';
      youWin.style.transform = "scaleY(2)";
    },500);

    }
    else{
     for (let i = 0; i <4; i++) {
       boxes[i].position=i
       boxes[i].style.transitionDuration="0s";
       boxes[i].style.transform ="translateX("+boxes[i].boxPositions[i]+"px)" 
     }
     setTimeout(function(){
       moveBoxUp(boxes[selectedPos])
      gameOvaer.style.visibility = "visible"
      gameOvaer.style.transitionDuration='1s';
      gameOvaer.style.transform = "scaleY(2)";
    },500);
     setTimeout(function(){
      ball.style.visibility = "visible"
      moveBoxUp(boxes[ballPosition])

    },1000);

   }
   finish=false
 }



}