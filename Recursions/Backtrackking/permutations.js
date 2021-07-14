function findPermutations(list) {
  const result = [];
  function permutations(nums, partial = [], bools = []) {
    // base case
    if (nums.length === partial.length) {
      result.push(partial.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!bools[i]) {
          bools[i] = true;
          partial.push(nums[i]);
          permutations(nums, partial, bools);
          bools[i] = false;
          partial.pop();
        }
      }
    }
  }
  permutations(list, [], new Array(list.length).fill(false));
  return result;
}

const nums = [1, 2, 3];
const result = findPermutations(nums);
console.log(result);
