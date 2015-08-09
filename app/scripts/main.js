"use strict";

console.log('\'Allo \'Allo!');
console.log('hi');
class Dot {
  constructor(top, left) {
    this.height = '20px';
    this.width = '20px';
    this.top = top;
    this.left = left;
  }
}
class Plane {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  fly() {
    console.log('im flying');
  }
}

var x = new Plane(400, 500);

var keyLeftPressed = false;
var keyRightPressed = false;
var keyTopPressed = false;
var keyDownPressed = false;

var pressedKeys = new Set();




function stopPlane() {
  var plane = $('#plane');
  if(event.keyCode === 32) {
    return;
  }

  console.log('stop event', event.keyCode);
  pressedKeys.delete(event.keyCode);
  plane.velocity("stop");

  var moveAirplane = changePosition(pressedKeys);
  plane.velocity(
    moveAirplane
    , { duration: 4000 });

}


let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
function changePosition(setOfkeys) {
  let moveAirplane = {};

  for(let item of setOfkeys) {
    if(item === 37) {
      moveAirplane.left = '-=1000px';
    }

    if(item === 38) {
      moveAirplane.top = "-=1000px"


    }

    if(item === 39) {
      moveAirplane.left = '+=1000px';

    }

    if(item === 40) {
      moveAirplane.top = "+=1000px"

    }
  }

  console.log(moveAirplane);
  return moveAirplane;
}
var counter = 0;
function movePlane(ele) {

  if(event.keyCode === 32) {
      counter += 1;
    console.log(counter);
    let dot = new Dot(ele.style.top, ele.style.left);
    console.log(dot);
    $("#body").append("<div id=\"dot"+ counter + "\"" + "style=\"top: "+ ele.style.top + "; left:" +  ele.style.left + ";width: 20px; height: 20px; position:absolute; background-color: green\"></div>")
    $("#dot" + counter).velocity({
      top: '-=1000px'
    }, {dispay: 'none'});
    console.log('this is position of element', ele);
    return console.log('im firing');
  }
  if(pressedKeys.has(event.keyCode)) {
    return;
  }
  pressedKeys.add(event.keyCode);
  var plane = $('#plane');
  plane.velocity("stop");
  var moveAirplane = changePosition(pressedKeys);
  plane.velocity(
      moveAirplane
    , { duration: 4000 });



}

x.fly();
