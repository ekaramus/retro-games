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

//Declaring possible moves
moves = {
    [KEY.LEFT]:  p => ({...p, x: p.x-1}),
    [KEY.RIGHT]: p => ({...p, x: p.x+1}),
    [KEY.DOWN]:    p => ({...p, y: p.y+1}),
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1 })
}

//add the control with the keyboard
document.addEventListener( "keydown", event =>{
    if (moves[event.keyCode]) {
        //stop the defualt action
        event.preventDefault();

        //Get new state of piece
        let p = moves[event.keyCode](board.piece);
        if (board.valid(p)) {
            if (event.keyCode === KEY.SPACE) {
                // Hard drop
                while (board.valid(p)) {
                  board.piece.move(p);   
                  p = moves[KEY.DOWN](board.piece);
                }
            } else {
                //move the piece
            board.piece.move(p);
            }

            //clear old drawing
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

            board.piece.draw();
            console.log(`x: ${p.x} y:${p.y} rows: ${ROWS}`);
        }
    }
});

