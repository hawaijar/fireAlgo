/*
	Given an array of intervals, merge all overlapping intervals.
	E.g For array of [[1,3],[2,10]], output should be [[1,10]]
 */
function mergeOverlappingIntervals(array) {
  // base case
  if (array.length === 0) return [];
  // sort the array based on start/time
  array = array.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [];
  let currentInterval = array[0];

  array = array.slice(1);

  for (let nextInterval of array) {
    let [_, endCurrentInterval] = currentInterval;
    const [startNextInterval, endNextInterval] = nextInterval;

    if (endCurrentInterval >= startNextInterval) {
      currentInterval[1] = Math.max(endCurrentInterval, endNextInterval);
    } else {
      mergedIntervals.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  mergedIntervals.push(currentInterval);
  return mergedIntervals;
}

const intervals = [
  [100, 105],
  [1, 104],
];

console.log(mergeOverlappingIntervals(intervals));
