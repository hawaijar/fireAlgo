/*
	Given a targeted amount and a list of denominations (where there is unlimited supply of each denomination),
	Find the maximum ways to make the targeted amount from the list of denominations.

	For e.g, if amount = 7 and list = [1,2,5],
	max. ways = [1,1,1,1,1,1,1], [2,5],[1,1,1,1,1,2], [2,2,2,1], [1,1,5], [1,1,2,2,1] = 6
 */
function maxNumberOfWaysForChange(n, denominations) {
  const ROW = denominations.length;
  const COL = n;
  const MATRIX = new Array(ROW + 1).fill([]);
  for (let i = 0; i <= ROW; i++) {
    MATRIX[i] = new Array(COL + 1).fill(0);
  }

  for (let i = 0; i <= ROW; i++) {
    MATRIX[i][0] = 1;
  }
  for (let i = 0; i <= COL; i++) {
    MATRIX[0][i] = 0;
  }
  for (let i = 1; i <= ROW; i++) {
    for (let j = 1; j <= COL; j++) {
      if (denominations[i - 1] <= j) {
        let waysIfIncluded = MATRIX[i][j - denominations[i - 1]];
        let waysIfExcluded = MATRIX[i - 1][j];
        MATRIX[i][j] = waysIfExcluded + waysIfIncluded;
      } else {
        MATRIX[i][j] = MATRIX[i - 1][j];
      }
    }
  }
  return MATRIX[ROW][COL];
}

let amount = 3;
let denominations = [1, 2, 3];

console.log(maxNumberOfWaysForChange(amount, denominations));
