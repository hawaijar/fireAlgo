/** Max sum of increasing sub-sequence **/

function maxSumIncreasingSubSequence(nums) {
  let maxSumAtEndings = nums.slice();
  let previousPositions = new Array(nums.length).fill(null);
  let temp;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        temp = nums[i] + maxSumAtEndings[j];
        if (temp >= maxSumAtEndings[i]) {
          previousPositions[i] = j;
          maxSumAtEndings[i] = temp;
        }
      }
    }
  }
  let maxIndex = 0;
  let maxValue = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (maxSumAtEndings[i] > maxValue) {
      maxValue = maxSumAtEndings[i];
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
  console.log(maxSumAtEndings);
  return [sequence.reduce((a, b) => a + b, 0), sequence];
}

const nums = [10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50];
console.log(maxSumIncreasingSubSequence(nums));
