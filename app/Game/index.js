import Board from "./Board.js";
import Cell from "./Cell/Cell.js";

const cell = new Cell();
cell.revive();

const board = new Board(5, 5);
board.generateBoard();

console.log(cell);
console.log(board.generateBoard());
