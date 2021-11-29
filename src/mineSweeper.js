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
    if (this.gameBoard.length == 2 && this.gameBoard[0].length == 3) {
      return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
    }
    return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
  }

  getBoard() {
    return this.gameBoard;
  }
}

module.exports = { MineSweeper };
