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
  function permute(arr, start) {
    if (start === nums.length) {
      result.push(arr.slice());
    } else {
      for (let i = start; i < nums.length; i++) {
        // swap element[i] and element[start]
        [arr[i], arr[start]] = [arr[start], arr[i]];
        permute(arr, start + 1);
        // undo the swap operation
        [arr[i], arr[start]] = [arr[start], arr[i]];
      }
    }
  }
  permute(nums, 0);
  return result;
}

console.log(permutations([1, 2, 3]));
