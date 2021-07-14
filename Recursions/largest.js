/**
 Given a list of numbers, find the largest of them
 **/

function largest(list = []) {
  // base case
  if (list.length === 0) return -Infinity;
  return Math.max(list[0], largest(list.slice(1)));
}
const arr = [-1, -2, -45, -5, -7, -12, -29, -4];
console.log(largest(arr));
