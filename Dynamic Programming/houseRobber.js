/*
ou are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is
that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses
were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob
tonight without alerting the police.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  function max(i, S, cache = {}) {
    if (i < 0) return 0;
    if (i === 0) return S[0];

    if (i in cache) return cache[i];
    cache[i] = Math.max(S[i] + max(i - 2, S, cache), max(i - 1, S, cache));

    return cache[i];
  }

  return max(nums.length - 1, nums, {});
}
