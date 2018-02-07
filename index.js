
var globalVar = 'foo';
function setup(){
  println(globalVar);
  globalVar = 'bah';

}

function draw(){
    println(globalVar);
    }

//@include './micro-basil.js'
