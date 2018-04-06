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


class Cell {
  // cell object
  constructor(column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;

    this.isAlive = false;

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


  draw() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        fill(240);
        noStroke();
        rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }
}








