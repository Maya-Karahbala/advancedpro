
var boxes=[];
let boxName;
for (let i = 0; i <4; i++) {
	boxName="box"+i
	boxes.push(document.getElementById(boxName))
	boxes[i].position=i
}