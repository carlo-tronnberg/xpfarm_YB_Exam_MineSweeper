const { MineSweeper } = require('../src/mineSweeper');

describe("I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb", () => {
  describe('US1 Game Board Creation', () => {
    it.each([[1, 1, [[' ']]]])(
      'Given a Game Board with width %i and height %i,    When starting the game,    Then I should get the empty Game Board %o',
      (width, height, gameBoard) => {
        const game = new MineSweeper(width, height);
        expect(game.getBoard()).toEqual(gameBoard);
      }
    );
  });
});
