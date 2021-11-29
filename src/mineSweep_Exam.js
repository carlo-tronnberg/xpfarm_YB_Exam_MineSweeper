class MineSweeper {
  constructor() {
    this.status = 'running';
  }

  getStatus() {
    return this.status;
  }

  getValue(x) {
    if (x == 1) return 'one';
    return 'two';
  }
}

module.exports = { MineSweeper };
