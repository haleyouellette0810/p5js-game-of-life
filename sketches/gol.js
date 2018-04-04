var grid;
// var width = 400;
// var height = 400; 


function setup() {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw() {
  background(250);
grid.draw();
}

class Grid {
  constructor(cellSize) {
    this.cellSize = cellSize;
    this.numberOfColumns = height / this.cellSize;
    this.numberOfRows = width / this.cellSize;


    var x = 2; // how big the first array should be
var y = 2; // how big each array inside of the first array should be
var twoDArray = new Array(x); // create the initial array
for (var i = 0; i < twoDArray.length; i ++) { // loop over each position in the array
  twoDArray[i] = new Array(y); // create another array inside of the first array at position `i`
  print(twoDArray);
}
  }

  draw(){
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        fill(240);
        noStroke();
        rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }


  
}



 




