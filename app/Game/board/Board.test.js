import Board from "./Board.js";

describe("Given a board class", () => {
  describe("When it receives a number of rows and columns", () => {
    test("Then it should return an array with a length of 5", () => {
      const rows = 5;
      const columns = 5;
      const expectedLength = 5;

      const board = new Board(rows, columns);
      const matrix = board.generateBoard();

      expect(matrix).toHaveLength(expectedLength);
    });
  });
});
