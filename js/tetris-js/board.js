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
  }