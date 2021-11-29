class MineSweeper {
  constructor(width, height) {
    this.createGameBoard(width, height);
  }

  createGameBoard(width, height) {
    this.gameBoard = Array(height)
      .fill()
      .map(() => Array(width).fill(' '));
  }

  getBoard() {
    return this.gameBoard;
  }
}

module.exports = { MineSweeper };
