const board = document.getElementById("game-board");
const context = board.getContext("2d");

//Calculating the size of board with the params given in constants.js file
context.board.width = COLS *BLOCK_SIZE;
context.board.height = ROWS *BLOCK_SIZE;

//Setting the scale for the board
context.scale(BLOCK_SIZE);