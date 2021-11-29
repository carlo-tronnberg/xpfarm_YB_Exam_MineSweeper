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
    this.log('Game created');
  }

  log(message) {
    console.log(
      this.drawGameBoard() + '\n\n[Sandbox %ix%i] %s',
      this.gameBoard[0].length,
      this.gameBoard.length,
      message
    );
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
      this.valueIsBetween(x, 0, this.gameBoard[0].length - 1) &&
      this.valueIsBetween(y, 0, this.gameBoard.length - 1)
    ) {
      return this.bombBoard[this.bombBoard[0].length - 1 - y][x];
    }
    return 0;
  }

  allowOperation(x, y) {
    return (
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] === ' ' ||
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] === '*'
    );
  }

  getSquareValue(x, y) {
    return this.gameBoard[this.gameBoard[0].length - 1 - y][x];
  }

  setSquareValue(x, y, value) {
    if (this.allowOperation(x, y))
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] = value;
  }

  stepOnSquare(x, y) {
    var message = '';
    if (this.getBombAt(x, y) == 1) {
      this.status = this.GAME_OVER;
      this.setSquareValue(x, y, 'X');
      message = 'BOOM! - Game Over';
    } else {
      this.setSquareValue(x, y, this.getNeighbouringBombsCount(x, y));
      message = this.getSquareValue(x, y) + ' bomb(s) around your square.';
    }
    this.log(message);
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

  markBomb(x, y) {
    this.setSquareValue(x, y, '*');
    this.log('Square [' + x + ',' + y + '] flagged as bomb');
  }

  unmarkBomb(x, y) {
    this.setSquareValue(x, y, ' ');
    this.log('Square [' + x + ',' + y + '] unflagged as bomb');
  }
  valueIsBetween(value, min, max) {
    return value >= min && value <= max;
  }
}

module.exports = { MineSweeper };
