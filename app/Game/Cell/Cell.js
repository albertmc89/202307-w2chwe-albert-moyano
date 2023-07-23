class Cell {
  isAlive = false;

  constructor() {
    this.isAlive = Math.random() < 0.25;
  }

  revive() {
    this.isAlive = true;
  }

  die() {
    this.isAlive = false;
  }
}

export default Cell;
