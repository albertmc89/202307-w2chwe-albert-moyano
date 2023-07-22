import Cell from "./Cell.js";

describe("Given a Cell class", () => {
  describe("When it initialize", () => {
    test("It should return the value of the property isAlive", () => {
      const validator = false;
      const expectedValueProperty = false;

      const value = new Cell(validator);

      expect(value).toHaveProperty("isAlive", expectedValueProperty);
    });
  });
});
