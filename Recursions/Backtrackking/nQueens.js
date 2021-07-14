function nQueens(n) {
  const result = [];
  const BOARD = new Array(n).fill([]);
  for (let i = 0; i < n; i++) {
    BOARD[i] = new Array(n).fill(0);
  }
  const LEFT_DIAGONALS = new Set();
  const RIGHT_DIAGONALS = new Set();
  const VERTICALS = new Set();
  const ROWS = new Set();

  const isQueenSafe = (row, col) => {
    return (
      !LEFT_DIAGONALS.has(col - row) &&
      !RIGHT_DIAGONALS.has(row + col) &&
      !VERTICALS.has(col) &&
      !ROWS.has(row)
    );
  };

  const placeQueenAt = (row, col) => {
    BOARD[row][col] = 1;
    LEFT_DIAGONALS.add(col - row);
    RIGHT_DIAGONALS.add(row + col);
    VERTICALS.add(col);
    ROWS.add(row);
  };

  const removeQueenFrom = (row, col) => {
    BOARD[row][col] = 0;
    LEFT_DIAGONALS.delete(col - row);
    RIGHT_DIAGONALS.delete(row + col);
    VERTICALS.delete(col);
    ROWS.delete(row);
  };

  const addSolution = () => {
    let temp = [];
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j < n; j++) {
        if (BOARD[i][j]) {
          str += "Q";
        } else {
          str += "-";
        }
      }
      temp.push(str);
    }
    result.push(temp);
  };

  const recur = (row = 0) => {
    if (row === n) {
      addSolution();
    }
    for (let col = 0; col < n; col++) {
      if (isQueenSafe(row, col)) {
        placeQueenAt(row, col);
        recur(row + 1);
        removeQueenFrom(row, col);
      }
    }
  };
  // start with first row
  recur(0);
  return result;
}

const no_of_queens = 4;
console.log(nQueens(no_of_queens));
