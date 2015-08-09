"use strict";

console.log('\'Allo \'Allo!');
console.log('hi');

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


function movePlane(ele) {
  var position = Number(ele.style.left.match(/\d+/));

  if(event.keyCode === 37) {
    console.log(ele.style.left = position - 50 +'px');
    return console.log('i should go left');
  }

  if(event.keyCode === 38) {
    return console.log('i should go up');
  }

  if(event.keyCode === 39) {
    ele.style.left = position + 50 +'px';
    return console.log('i should to right');
  }

  if(event.keyCode === 40) {
    return console.log(' i should go down');
  }
  console.log(ele);
  console.log(ele.value);
}
x.fly();
