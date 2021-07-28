/*
	Consider a list of items where each item represents the cost and weight of the item, for a given
	capacity, find the maximum cost that can be yield from the given items.

	[ [1,2], [4,3], [5,6], [6,7] ], capacity = 10

	For the above, if we choose [ [4,3], [6,7] ], we get 10.
	Also, display the list of selected items.
 */
function KS(items, capacity, n = items.length) {
  if (capacity === 0 || n === 0) return 0;
  const [costOfLastItem, weightOfLastItem] = items[n - 1];
  if (weightOfLastItem > capacity) {
    // skip and consider the remaining items
    return KS(items.slice(0, n - 1), capacity);
  }
  const lastItemIncluded =
    costOfLastItem + KS(items.slice(0, n - 1), capacity - items[n - 1][1]);
  const lastItemExcluded = KS(items.slice(0, n - 1), capacity);
  return Math.max(lastItemIncluded, lastItemExcluded);
}

function solveKnapsack(
  profits,
  weights,
  capacity,
  n = profits.length,
  cache = {}
) {
  if (n === 0 || capacity === 0) return 0;
  if (n in cache) {
    return cache[n];
  }
  if (weights[n - 1] > capacity) {
    cache[n] = solveKnapsack(
      profits.slice(0, n - 1),
      weights.slice(0, n - 1),
      capacity,
      n - 1,
      cache
    );
    return cache[n];
  }
  const includedLastItem =
    profits[n - 1] +
    solveKnapsack(
      profits.slice(0, n - 1),
      weights.slice(0, n - 1),
      capacity - weights[n - 1],
      n - 1,
      cache
    );
  const excludedLastItem = solveKnapsack(
    profits.slice(0, n - 1),
    weights.slice(0, n - 1),
    capacity,
    n - 1,
    cache
  );
  cache[n] = Math.max(includedLastItem, excludedLastItem);
  return cache[n];
}

const i = [
  [2, 1],
  [70, 70],
  [30, 30],
  [69, 69],
  [100, 100],
];
const c = 100;

// console.log(KS(i, c, i.length));
const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(solveKnapsack(profits, weights, 7));
console.log(solveKnapsack(profits, weights, 6));
