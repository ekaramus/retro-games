const gameWindow = document.getElementById("game-board");
const context = gameWindow.getContext("2d");

let board;


//Calculating the size of board with the params given in constants.js file
context.gameWindow.width = COLS *BLOCK_SIZE;
context.gameWindow.height = ROWS *BLOCK_SIZE;

//Setting the scale for the board
context.scale(BLOCK_SIZE);

//Initializing the board
function play() {
    board = new Board(context);
    //checking if the table is initialized correctly
    console.table(board.grid);
}

