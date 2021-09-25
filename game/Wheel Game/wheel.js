function Wheel(){
  const CIRCLE = 500 / 2 - 10; // RADIUS
  
  let items = [
    ["Yoas", 1],
    ["Kevin", 1],
    ["Mardy", 1],
    ["Vik", 1],
    ["Marc", 1],
    ["Eric", 1],
    ["Shreyas", 1]
  ];

  /*
  let items = [
    ["backpack", 1],
    ["pen", 3],
    ["others", 5],
    ["book", 3],
    ["none", 3],
    ["swag", 5]
  ];
  */

  this.data = {};
  this.data["circle"] = {r: 100, g: 200, b: 250};
  this.over = false;
  this.posUpdate = 0;
  this.velUpdate = 0.1;
  this.accUpdate = -0.0001 * (Math.random() * 4 + 1);
  this.itemArr = [];

  let CHANCE; //Winning Chance (Determines the number of pies in a circle)

  this.constructor = function(){
    let sum = 0;

    for(let i = 0; i < items.length; i++){
      sum += items[i][1];
    }

    CHANCE = 1 / sum;

    while(this.itemArr.length != sum){
      let rand = Math.floor(Math.random() * items.length);
      let item = items[rand];

      if(item[1] > 0){
        this.itemArr.push(item[0]);
        item[1]--;
      }
    }
  }

  this.show = function(){
    push();

    strokeWeight(5);
    fill(this.data["circle"].r, this.data["circle"].g, this.data["circle"].b);
    ellipse(width / 2, height / 2, CIRCLE * 2);

    this.lines(100);

    beginShape();
    for(let i = 0; i <= TWO_PI; i += (TWO_PI / 3)){
      let pt = createVector(30 * cos(i + map(60, 0, 360, 0, TWO_PI)) + (3 * width / 4), 30 * sin(i + map(60, 0, 360, 0, TWO_PI)) + (height / 2));

      fill(255, 0, 0);
      noStroke();
      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);
    pop();

    let rad = 0;
    let RAD_RANGE = TWO_PI / this.itemArr.length;

    for(let i = 0; i < this.itemArr.length; i++){
      let pt = createVector(200 * cos(rad + this.posUpdate + (TWO_PI / Math.floor(1 / CHANCE)) / 2),
                            200 * sin(rad + this.posUpdate + (TWO_PI / Math.floor(1 / CHANCE)) / 2));

      rad += RAD_RANGE;

      push();
      translate(pt.x +  width  / 2, pt.y  + height / 2);
      textSize(20);
      text(this.itemArr[i], 0, 0);
      pop();
    }

  }

  this.update = function(){
    if(this.velUpdate > 0){
      this.velUpdate += this.accUpdate;
      this.posUpdate += this.velUpdate;
    }else{
      this.over = true;
    }
  }

  this.lines = function(sub){
    let center = createVector(width / 2, height / 2);

    for(let i = 0; i <= TWO_PI; i += (TWO_PI / Math.floor(1 / CHANCE))){
      let pt = createVector(CIRCLE * cos(i + this.posUpdate) + width / 2, CIRCLE * sin(i + this.posUpdate) + height / 2);
      line(pt.x, pt.y, center.x, center.y);

      strokeWeight(5);
      fill(100);
      point(pt.x, pt.y);
    }
  }

  this.constructor();
}
