var grid;
// var width = 400;
// var height = 400; 


function setup() {
  createCanvas(400, 400);
  grid = new Grid(20);
grid.randomize();
}

function draw() {
  background(250);
  grid.draw(); 
}


class Cell {

  // cell object
  constructor(column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
  }

  draw() {
    if (this.isAlive == true) {
      fill(200, 0, 200);
    } else if (this.isAlive == false) {
      fill(240);
    }
    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }


  setIsAlive(value) {
    if (value == false) {
      this.isAlive = false;
    } else if (value == true) {
      this.isAlive = true;
    }
  }

}

class Grid {
  constructor(cellSize) {
    this.cellSize = cellSize;
    this.numberOfColumns = height / this.cellSize;
    this.numberOfRows = width / this.cellSize;
    this.cells = new Array(this.numberOfColumns);


    //filling array with empty arrays to form a 2d matrix
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i] = new Array(this.numberOfRows);
    }


    // going inside the arrays within the arrays and placing a cell at every index.
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize)
      }
    }
  }

  randomize() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setIsAlive(floor(random(2)));
      }
    }
  }

  draw() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].draw();
      }
    }
  }
}









