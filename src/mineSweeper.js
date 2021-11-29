class MineSweeper {
  GAME_RUNNING = 'running';
  GAME_OVER = 'Game Over';

  constructor(width, height) {
    this.createGameBoard(width, height);
    this.status = this.GAME_RUNNING;
  }
  getStatus() {
    return this.status;
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
  getBombAt(x, y) {
    if (
      x >= 0 &&
      x < this.gameBoard[0].length &&
      y >= 0 &&
      y < this.gameBoard.length
    ) {
      return this.bombBoard[this.bombBoard[0].length - 1 - y][x];
    }
    return 0;
  }

  allowOperation(x, y) {
    return this.gameBoard[this.gameBoard[0].length - 1 - y][x] === ' ';
  }

  getSquareValue(x, y) {
    return this.gameBoard[this.gameBoard[0].length - 1 - y][x];
  }

  setSquareValue(x, y, value) {
    if (this.allowOperation(x, y))
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] = value;
  }

  stepOnSquare(x, y) {
    if (this.getBombAt(x, y) == 1) {
      this.status = this.GAME_OVER;
      this.setSquareValue(x, y, 'X');
    } else {
      this.setSquareValue(x, y, this.getNeighbouringBombsCount(x, y));
    }
  }

  getNeighbouringBombsCount(x, y) {
    // Get bomb count for the 8 neighboring squares (but only within the board)
    var count = 0;
    count += this.getBombAt(x - 1, y - 1);
    count += this.getBombAt(x - 1, y);
    count += this.getBombAt(x - 1, y + 1);
    count += this.getBombAt(x, y - 1);
    count += this.getBombAt(x, y + 1);
    count += this.getBombAt(x + 1, y - 1);
    count += this.getBombAt(x + 1, y);
    count += this.getBombAt(x + 1, y + 1);
    if (count == 0) count = '_';

    return count;
  }
}

module.exports = { MineSweeper };
