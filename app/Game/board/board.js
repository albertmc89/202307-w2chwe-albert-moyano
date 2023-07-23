class Board {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  generateBoard() {
    const board = new Array(this.rows);

    for (let row = 0; row < board.length; row++) {
      board[row] = new Array(this.columns);

      for (let cellPosition = 0; cellPosition < board.length; cellPosition++) {
        board[row][cellPosition] = Math.random() < 0.25;
      }
    }

    return board;
  }
}

export default Board;
