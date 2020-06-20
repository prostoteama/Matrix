
class Matrix {

  static news = () => {
    return Math.round(Math.random() * (10 - (-10)) + (-10));
  };

  static create(col, line) {
    const lines = [];
    while (lines.length !== line) {
      const cols = [];
      while (cols.length !== col) {
        cols.push(Matrix.news());
      }
      lines.push(cols);
    }
    return lines;
  }
  
  constructor(col, line) {
    this.matrix = Matrix.create(col, line);
    this.col = col;
    this.line = line;
  }

  bgElem() {
    let res = 0;
    let state;
    for (let i = 0; i < this.matrix.length; i++) {
      const line = this.matrix[i];
      for (let j = 0; j < line.length; j++) {
        const col = line[j];
        if (col > res) {
          res = col;
          state = [i, j];
        }
      }
    }
    console.log(
      ` Строка ${state[0] + 1}, колонка ${state[1] + 1}, елемент ${res}`
    );
    return true;
  }

  smElem() {
    let res;
    let state;
    for (let i = 0; i < this.matrix.length; i++) {
      const line = this.matrix[i];
      for (let j = 0; j < line.length; j++) {
        const col = line[j];
        if (!res) {
          res = col;
        } else {
          if (col < res) {
            res = col;
            state = [i, j];
          }
        }
      }
    }
    console.log(
      ` Строка ${state[0] + 1}, колонка ${state[1] + 1}, елемент ${res}`
    );
    return true;
  }

  get SumMultThr () {
    let modl = 0;
    let one = this.matrix.reduce( (s, el) => s.concat(el) ) 
    for (let el of one) {
      if (el > 0 && el % 3 == 0) modl += el;
    }
    return modl
  }
  
}

const mat = new Matrix(5, 5);
console.log(mat.matrix);   // Matrix
console.log(mat.bgElem()); // Highest elem
console.log(mat.smElem()); // Smolest elem
console.log(mat.SumMultThr) // Sum multiplie thr