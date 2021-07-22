function longestSubSequence(nums) {
  let longestAtEndings = new Array(nums.length).fill(1);
  let previousPositions = new Array(nums.length).fill(null);
  let temp;
  let max = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        temp = 1 + longestAtEndings[j];
        if (temp > longestAtEndings[i]) {
          previousPositions[i] = j;
        }
        longestAtEndings[i] = Math.max(longestAtEndings[i], temp);
        max = Math.max(max, longestAtEndings[i]);
      }
    }
  }
  let maxIndex = 0;
  let maxValue = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (longestAtEndings[i] > maxValue) {
      maxValue = longestAtEndings[i];
      maxIndex = i;
    }
  }
  const sequence = [];
  while (true) {
    sequence.unshift(nums[maxIndex]);
    if (previousPositions[maxIndex] !== null) {
      maxIndex = previousPositions[maxIndex];
    } else {
      break;
    }
  }
  return sequence;
}

const nums = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
console.log(longestSubSequence(nums));
