class carlo_t_yb_MineSweep_Exam {
  constructor() {
    this.status = 'running';
  }

  getStatus() {
    return this.status;
  }

  getValue(x) {
    if (x == 1) return 'one';
    return 'two';
  }
}

module.exports = { carlo_t_yb_MineSweep_Exam };

