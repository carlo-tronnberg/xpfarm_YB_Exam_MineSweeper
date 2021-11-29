const { MineSweeper } = require('../src/mineSweep_Exam');

describe('carlo_t_yb_MineSweep_Exam', () => {
  it('Start a new mineSweep_Exam', () => {
    const game = new MineSweeper();

    expect(game.getStatus()).toEqual('running');
  });
});

describe('carlo_t_yb_MineSweep_Exam 2', () => {
  it.each([
    [1, 'one'],
    [2, 'two'],
  ])("Given ,      When %i,      Then  '%s'", (x, result) => {
    const game = new MineSweeper();
    expect(game.getValue(x)).toEqual(result);
  });
});
