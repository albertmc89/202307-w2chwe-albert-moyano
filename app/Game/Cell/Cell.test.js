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

describe("Given a Cell method die", () => {
  describe("When the method is called", () => {
    test("It change de value of the property isAlive", () => {
      const value = new Cell();
      value.die();
      const expectedPropertyValue = false;

      expect(value.isAlive).toBe(expectedPropertyValue);
    });
  });
});

describe("Given a Cell method revive", () => {
  describe("When the method is called", () => {
    test("It change de value of the property isAlive", () => {
      const value = new Cell(false);
      value.revive();
      const expectedPropertyValue = true;

      expect(value.isAlive).toBe(expectedPropertyValue);
    });
  });
});
