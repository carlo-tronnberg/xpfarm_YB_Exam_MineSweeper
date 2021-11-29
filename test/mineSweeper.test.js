const { MineSweeper } = require('../src/mineSweeper');

describe("I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb", () => {
  describe('US1 Game Board Creation', () => {
    it.each([
      [1, 1, [[' ']]],
      [2, 1, [[' ', ' ']]],
      [1, 2, [[' '], [' ']]],
      [
        2,
        2,
        [
          [' ', ' '],
          [' ', ' '],
        ],
      ],
      [
        3,
        3,
        [
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' '],
        ],
      ],
    ])(
      'Given a Game Board with width %i and height %i,    When starting the game,    Then I should get the empty Game Board %o',
      (width, height, gameBoard) => {
        const game = new MineSweeper(width, height);
        expect(game.getBoard()).toEqual(gameBoard);
      }
    );

    it.each([
      [3, 3, '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'],
      [3, 2, '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'],
    ])(
      'Given a Game Board width 3 and height 3,    When starting the game,    Then I want to create the empty Game Board and get it back as a string %s',
      (width, height, gameBoardString) => {
        const game = new MineSweeper(width, height);
        expect(game.drawGameBoard()).toEqual(gameBoardString);
      }
    );

    it('Given a Game Board with width 3 and height 3,    When starting the game,    Then I want to create the hidden Bombs Board, matching the Game Board dimension', () => {
      let bombBoard = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const game = new MineSweeper(3, 3);
      game.setBombs(bombBoard);
      expect(game.getBombs()).toEqual(bombBoard);
    });
  });
});
