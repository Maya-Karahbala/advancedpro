
var boxes=[];
var positions=[0,300,600,900]

let boxName;
for (let i = 0; i <4; i++) {
	boxName="box"+i
	boxes.push(document.getElementById(boxName))
	boxes[i].position=i
}

// random number between 3 amd 0 for random positon of top
var ranPos=Math.round(Math.random() * (3 - 0))
var ball=document.getElementById("ball1")
ball.style.marginLeft= positions[ranPos]+80+"px";
//
function moveBoxUp(box){
	box.style.transitionDuration='1s';
	box.style.transform = "translateY(-60%)";
	}
function moveBoxDown(box){
	box.style.transitionDuration='1s';
	box.style.transform = "translateY(0%)";
	}
function moveBallRight(i){
	ball.style.transitionDuration='1s';
	ball.style.transform ="translateX("+(295*i)+"px)"
	}

// move onle box above ball
function moveUpDown(box){
box.style.transitionDuration='1s';
setTimeout(function(){
	box.style.transform = "translateY(-60%)";
	setTimeout(function(){
		box.style.transform = "translateY(0%)";
	},1000);
},1000);
	}

// each box has positon array to transform in the true direction
boxes[0].boxPositions=[0,300,600,900]
boxes[1].boxPositions=[-300,0,300,600]
boxes[2].boxPositions=[-600,-300,0,300]
boxes[3].boxPositions=[-900,-600,-300,0]


	function moveto(box,position){
	box.position=position
	box.style.transitionDuration='1s';
    box.style.transform ="translateX("+box.boxPositions[position]+"px)" 
	}
function swap(){
	let randfrom=Math.round(Math.random() * (3 - 0))

	let randto=Math.round(Math.random() * (3 - 0))
	while(randfrom==randto)randto=Math.round(Math.random() * (3 - 0))
	let b,b1,b2
    for(b of boxes){
 	if(b.position==randfrom)b1=b
 	else if(b.position==randto)b2=b
     }
  moveto(b2,randfrom)
  moveto(b1,randto)
}
var i=1;
function swapBall(){
	// swap btween 0,1  1,2  2,3 so generate only first digit
	ball.style.visibility = "visible"
	let ballCurrentPos=boxes[ranPos].position
	if(ballCurrentPos!=3){
	//let currentBox=boxes[ranPos];
	let b;
	for(b of boxes){
		if(b.position==(ballCurrentPos+1)){
			setTimeout(function(){
				moveBoxUp(b)
				moveBoxUp(boxes[ranPos])
				setTimeout(function(){
					moveBallRight(i++)
					setTimeout(function(){
					moveBoxDown(b)
				    moveBoxDown(boxes[ranPos])
					},1000);
				},1000);
			},1000);
			break;
		}
	}
	ball.style.visibility = "hidden"
	ranPos++;

}

}
function newGame(){
	setTimeout(function(){
		swap();
		setTimeout(function(){
			swap();
			setTimeout(function(){
				swap();
				setTimeout(function(){
					swapBall();
					setTimeout(function(){
						swap();
						setTimeout(function(){
							swap();
							setTimeout(function(){
								swap();
								setTimeout(function(){
									swap();
									setTimeout(function(){
										swapBall();
										setTimeout(function(){
											swap();
										},1000);
									},1000);
								},1000);
							},1000);
						},1000);
					},1000);
				},1000);
			},1000);
		},1000);
	},1000);

}


setTimeout(function(){
	moveBoxUp(boxes[ranPos])
	setTimeout(function(){
		ball.style.visibility = "hidden"
		setTimeout(function(){
			moveBoxDown(boxes[ranPos])
			setTimeout(function(){
				newGame()
			},1000);
		},1000);
	},3000);
},1000);