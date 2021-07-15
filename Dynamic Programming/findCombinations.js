/* C(n,k) = n!/(n - k)! x k!
	Also, in recurrence relation, C(n,k) = C(n-1, k-1) + C(n-1, k)
	C(n,n) = 1
	C(n, 0) = 1
 */

function findCombinations(n, k) {
  const table = new Array(n + 1).fill([]);
  for (let i = 0; i <= n; i++) {
    table[i] = new Array(k + 1).fill(0);
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (i === 0) {
        if (j === 0) {
          table[i][j] = 1;
        } else {
          table[i][j] = 0;
        }
      } else if (j === 0) {
        table[i][j] = 1;
      } else {
        table[i][j] = table[i - 1][j - 1] + table[i - 1][j];
      }
    }
  }
  console.log(table);
  return table[n][k];
}
console.log(findCombinations(5, 4));
