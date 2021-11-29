const { carlo_t_yb_MineSweep_Exam } = require('../src/mineSweep_Exam');


describe('carlo_t_yb_MineSweep_Exam', () => {
  it('Start a new mineSweep_Exam', () => {
    const mineSweep_Exam = new carlo_t_yb_MineSweep_Exam();

    expect(mineSweep_Exam.getStatus()).toEqual('running');
  });
});

describe('carlo_t_yb_MineSweep_Exam 2', () => {
  it.each([
    [1, 'one'],
    [2, 'two'],
  ])("Given ,      When %i,      Then  '%s'", (x, result) => {
    const mineSweep_Exam = new carlo_t_yb_MineSweep_Exam();
    expect(mineSweep_Exam.getValue(x)).toEqual(result);
  });
});

