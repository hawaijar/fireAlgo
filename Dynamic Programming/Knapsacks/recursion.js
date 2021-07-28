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

const i = [
  [2, 1],
  [70, 70],
  [30, 30],
  [69, 69],
  [100, 100],
];
const c = 100;

console.log(KS(i, c));
