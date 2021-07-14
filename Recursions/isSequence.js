/**
 Check if a given array is in sequence (not necessarily contiguous)

 a < b < c < d ...
 (a < b) && (b < c) && (c < d) && ...
 **/

function isSequence(list = []) {
  function sequence(arr, direction = "ASC") {
    if (arr.length === 1) return true;
    if (direction === "ASC") {
      return arr[0] < arr[1] && sequence(arr.slice(1), direction);
    } else {
      return arr[0] > arr[1] && sequence(arr.slice(1), direction);
    }
  }
  if (list.length === 0 || list.length === 1) return true;
  const dir = list[0] < list[1] ? "ASC" : "DESC";
  return sequence(list, dir);
}
const l = [1, 2, 3, 13, 20, 90];
console.log(isSequence(l));
