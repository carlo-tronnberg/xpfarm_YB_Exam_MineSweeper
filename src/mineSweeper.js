class MineSweeper {
  constructor(width, height) {
    this.createGameBoard(width, height);
  }

  createGameBoard(width, height) {
    this.gameBoard = Array(height)
      .fill()
      .map(() => Array(width).fill(' '));
  }

  drawGameBoard() {
    let gameBoardString = '';

    for (let rowVector of this.gameBoard) {
      gameBoardString += '+-'.repeat(rowVector.length) + '+\n|';
      for (let columnVector of rowVector) {
        gameBoardString += columnVector + '|';
      }
      gameBoardString += '\n';
    }
    gameBoardString += '+-'.repeat(this.gameBoard[0].length) + '+';
    return gameBoardString;
  }

  getBoard() {
    return this.gameBoard;
  }

  setBombs(bombBoard) {
    if (
      bombBoard.length === this.gameBoard.length &&
      bombBoard[0].length === this.gameBoard[0].length
    ) {
      this.bombBoard = bombBoard;
    } else {
      this.bombBoard = null;
    }
  }
  getBombs() {
    return this.bombBoard;
  }

  allowOperation(x, y) {
    return this.gameBoard[this.gameBoard[0].length - 1 - y][x] === ' ';
  }

  setSquareValue(x, y, value) {
    if (this.allowOperation(x, y))
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] = value;
  }
}

module.exports = { MineSweeper };
