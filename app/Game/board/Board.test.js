import Cell from "../Cell/Cell";
import Board from "./Board";

const rows = 5;
const columns = 5;
const board = new Board(rows, columns);

describe("Given a board class", () => {
  describe("When it receives a number of rows and columns", () => {
    test("Then it should return an array with a length of 5", () => {
      const expectedLength = 5;

      const matrix = board.generateBoard();

      expect(matrix).toHaveLength(expectedLength);
    });

    test("Then it should return length 5 in every postion of the board array", () => {
      const expectedLength = 5;
      const boardArray = board.generateBoard();

      expect(boardArray[0].length).toBe(expectedLength);
    });

    test("Then it should fill the matrix with the instance of cell", () => {
      const expected = new Cell();

      const boardArray = board.generateBoard();
      const firstCell = boardArray[0];

      expect(firstCell[0]).toStrictEqual(expected);
    });
  });
});
