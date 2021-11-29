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
    this.bombBoard = bombBoard;
  }
  getBombs() {
    return this.bombBoard;
  }
}

module.exports = { MineSweeper };
