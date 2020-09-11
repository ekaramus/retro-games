class Board {

    constructor(ctx) {
      this.ctx = ctx;
      this.grid = this.getEmptyBoard();
    }
    
    // Get matrix filled with zeros.
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }

    valid(p) {
        return p.shape.every((row, dy) => {
          return row.every((value, dx) => {
            let x = p.x + dx;
            let y = p.y + dy;
            return (
              value === 0 ||
              (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y))
            );
          });
        });
      }

    insideWalls(x) {
        return x >= 0 && x < COLS;
    }
    
    aboveFloor(y) {
        return y <= ROWS;
    }
    notOccupied(x, y) {
        return this.grid[y] && this.grid[y][x] === 0;
    }

    rotate(p) {
        //create a copy to transform and than switch return in place of the original
        let copy = JSON.parse(JSON.stringify(p));

        //rotate the matrix
        // Transpose matrix, p is the Piece.
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
              [p.shape[x][y], p.shape[y][x]] = 
              [p.shape[y][x], p.shape[x][y]];
            }
        }
            
        // Reverse the order of the columns.
        p.shape.forEach(row => row.reverse());

        console.log(p);

        return copy;
    }

  }