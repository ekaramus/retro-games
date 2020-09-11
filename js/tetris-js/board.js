class Board {
    
    constructor (context) {
        this.context = context;
        this.grid = this.getEmptyBoard();
    }

    //Create an 2d array with 0s
    getEmptyBoard() {
        return Array.from(
            {lenght: ROWS}, () => Array(ROWS).fill(0)
        );
    }

}