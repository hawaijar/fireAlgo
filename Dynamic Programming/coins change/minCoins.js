/*
Given a list of positive integers representing coin denominations and a single non-negative integer n representing a target amount
of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target
amount using the given coin denominations.

Note:  You have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10],
you have access to an unlimited amount of 1s, 5s, and 10s.

If it's impossible to make change for the target amount, return -1.
 */

function minNumberOfCoinsForChange(n, denominations) {
  const ROW = denominations.length;
  const COL = n;
  const MATRIX = new Array(ROW + 1).fill([]);
  for (let i = 0; i <= ROW; i++) {
    MATRIX[i] = new Array(COL + 1).fill(Infinity);
  }

  for (let i = 0; i <= ROW; i++) {
    MATRIX[i][0] = 0;
  }

  for (let i = 1; i <= ROW; i++) {
    for (let j = 1; j <= COL; j++) {
      if (denominations[i - 1] <= j) {
        MATRIX[i][j] = Math.min(
          MATRIX[i - 1][j],
          1 + MATRIX[i][j - denominations[i - 1]]
        );
      } else {
        MATRIX[i][j] = MATRIX[i - 1][j];
      }
    }
  }
  if (MATRIX[ROW][COL] === Infinity) return -1;
  return MATRIX[ROW][COL];
}

const arr = [2, 4];
const n = 7;

console.log(minNumberOfCoinsForChange(n, arr));
