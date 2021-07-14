/** Find the combinations of (n,k) **/
function findCombinations(n, k) {
  const result = [];
  const hash = {};
  function combinations(nums, partial = [], bools = []) {
    // base case
    if (k === partial.length) {
      const num = partial.slice().sort((a, b) => a - b);
      if (!(num.toString() in hash)) {
        hash[num.toString()] = 1;
        result.push(num);
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!bools[i]) {
          bools[i] = true;
          partial.push(nums[i]);
          combinations(nums, partial, bools, k);
          bools[i] = false;
          partial.pop();
        }
      }
    }
  }
  combinations(n, [], new Array(n.length).fill(false), k);
  return result;
}

const nums = [1, 2, 3, 4];
const result = findCombinations(nums, 3);
console.log(result);
