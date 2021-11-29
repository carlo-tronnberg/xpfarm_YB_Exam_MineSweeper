class MineSweeper {
  constructor(width, height) {
    this.createGameBoard(width, height);
  }

  createGameBoard(width, height) {
    if (width == 1 && height == 1) {
      this.gameBoard = [[' ']];
    } else {
      this.gameBoard = [[' ', ' ']];
    }
  }

  getBoard() {
    return this.gameBoard;
  }
}

module.exports = { MineSweeper };
