const board = (rows) => {
  const board = new Array(rows);
  for (let row = 0; row < board.length; row++) {
    board[row] = [];

    for (let cellPosition = 0; cellPosition < board.length; cellPosition++) {
      board[row][cellPosition] = Math.random() < 0.25;
    }
  }

  return board;
};

console.log(board(5));

export default board;
