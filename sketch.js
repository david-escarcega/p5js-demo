var x = [];// esto es un arreglo
var y = [];// esto es un arreglo
var incremento = [];
var h = [];
var mensajes =[];

function setup() {
  createCanvas(600, 400);
  print(floor(random(1, 10)))
  for(var i = 0; i < 5; i = i +1){
    x[i] = floor(random(0, width));
    y[i] = 0;
    incremento[i] = floor(random(1, 10));
    h[i] = floor(random(1, 20));
  }
  mensajes = ["1", "2", "3", "4", "5"];
  print(x);
  print(y);
  print(incremento);
  print(h);
}

function draw() {
  background(255,0,0);
  stroke(255);
  strokeWeight(2);
  noFill();
  for(var i = 0; i < 5; i = i +1){
    strokeWeight(5);
     ellipse(x[i], y[i] ,h[i]); 
    strokeWeight(1);
    text(mensajes[i], x[i] + 8, y[i]);
    if (y[i] > height) {
      incremento[i] = incremento[i] * -1;
    }else if(y[i] <0 ){
      incremento[i] = incremento[i] * -1;
    }
    y[i] = y[i] + incremento[i];
  }
  
}
