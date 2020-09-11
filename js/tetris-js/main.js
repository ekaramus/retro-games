const canvas = document.getElementById("gameBoard");
const context = canvas.getContext("2d");

let board;


//Calculating the size of board with the params given in constants.js file
context.canvas.width = COLS * BLOCK_SIZE;
context.canvas.height = ROWS *BLOCK_SIZE;

//Setting the scale for the board
context.scale(BLOCK_SIZE, BLOCK_SIZE);

//Initializing the board
function play() {
    board = new Board(context);
    //checking if the table is initialized correctly
    console.table(board.grid);
}

