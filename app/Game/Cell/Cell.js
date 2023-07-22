class Cell {
  isAlive = false;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  revive() {
    this.isAlive = true;
  }

  die() {
    this.isAlive = false;
  }
}

export default Cell;
