import Cell from "../Cell/Cell.js";

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
        board[row][cellPosition] = new Cell();
        const newCell = new Cell();
        [cellPosition].push(newCell);
      }
    }

    return board;
  }
}

export default Board;
