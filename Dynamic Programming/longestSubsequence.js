function longestSubSequence(nums) {
  function longest(nums, i, cache = {}) {
    if (i === 0) return 1;
    if (i in cache) return cache[i];
    let max = 1;
    for (let j = i - 1; j >= 0; j--) {
      let temp = longest(nums, j, cache);
      if (nums[i] > nums[j]) {
        temp += 1;
      }
      max = Math.max(max, temp);
    }
    cache[i] = max;
    return max;
  }
  return longest(nums, nums.length - 1, {});
}

const nums = [1, 4, 6, 1, 2, 10];
console.log(longestSubSequence(nums));
