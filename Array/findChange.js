/*
You're given an array of coins (positive integer).
Write a function that returns minimum amount of change that *cannot* be created from the given list.

E.g, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4.
If you're given no coins, the minimum amount of change that you can't create is 1.

Idea:
1. Sort the array.
2. When current change + 1 >= next value, v => change (that can be made) = current change + v
3. When current change + 1 < next value, v => return change + 1

 */

function nonConstructibleChange(coins) {
  // base case
  if (coins.length === 0) return 1;
  // sort the coins
  coins = coins.sort((a, b) => a - b);
  let change = 0;
  for (let coin of coins) {
    if (change + 1 >= coin) {
      change += coin;
    } else {
      return change + 1;
    }
  }
  return change + 1;
}

const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins));
