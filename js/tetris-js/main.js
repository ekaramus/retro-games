const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

let board;


//Calculating the size of board with the params given in constants.js file
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS *BLOCK_SIZE;

//Setting the scale for the board
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

//Initializing the board
function play() {
  board = new Board(ctx);
  let piece = new Piece(ctx);
  piece.draw();

  board.piece = piece;
}

