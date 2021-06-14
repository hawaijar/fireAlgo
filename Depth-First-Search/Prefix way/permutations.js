/*
	Given an array nums of distinct integers, return all the possible permutations.
	You can return the answer in any order.
	Example 1:
	Input: nums = [1,2,3]
	Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
	https://leetcode.com/problems/permutations/
 */

function permutations(nums) {
  const result = [];
  function permute(prefix=[], arr) {
    if (arr.length === 0) {
      result.push(prefix);
    } else {
      for (let i = 0; i < arr.length; i++) {
        permute(
          [...prefix,arr[i]],
          [...arr.slice(0, i), ...arr.slice(i + 1)]
        );
      }
    }
  }
  permute([], nums);
  return result;
}

console.log(permutations([1,2,3]));
