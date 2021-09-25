let wheel;
let click;
let buttonPos = {};

function setup(){
  createCanvas(1000, 500);

  wheel = new Wheel();
  click = new ClickButton();

  buttonPos["pos"] = createVector(7 * width / 8, 3 * height / 4);
  buttonPos["wid"] = 100;
  buttonPos["hgt"] = 50;
}

function draw(){
  background(51);

  wheel.show();
  wheel.update();

  click.show();
}

function mousePressed(){
  if(mouseX > buttonPos["pos"].x && mouseX < buttonPos["pos"].x + buttonPos["wid"] &&
    mouseY > buttonPos["pos"].y && mouseY < buttonPos["pos"].y + buttonPos["hgt"] ){
      if(wheel.over){
        setup();
      }
    }
}

function ClickButton(){
  this.show = function(){
    rect(buttonPos["pos"].x, buttonPos["pos"].y, buttonPos["wid"], buttonPos["hgt"]);
    textAlign(CENTER, CENTER);
    text("CLICK HERE\nFOR REPLAY!",buttonPos["pos"].x + buttonPos["wid"] / 2, buttonPos["pos"].y + buttonPos["hgt"] / 2);
  }
}
