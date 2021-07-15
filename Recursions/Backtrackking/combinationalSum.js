/*
Given a list of integers and a target, find all the combinations that sum to the target
 */

function sum(nums) {
  return nums.reduce((a, b) => a + b, 0);
}
function hashing(list) {
  return list.sort((a, b) => a - b).toString();
}
function findSums(list, k) {
  const hash = {};
  const result = [];
  const visited = new Array(list.length).fill(false);
  const recur = (list, partial) => {
    if (sum(partial) === k) {
      const h = hashing(partial);
      if (!(h in hash)) {
        result.push(partial.slice());
        hash[h] = true;
      }
    }
    if (sum(partial) < k) {
      for (let i = 0; i < list.length; i++) {
        if (!visited[i]) {
          visited[i] = true;
          partial.push(list[i]);
          recur(list, partial);
          visited[i] = false;
          partial.pop();
        }
      }
    }
  };

  recur(list, []);
  return result;
}

const list = [10, 1, 2, 7, 6, 1, 5];
const k = 8;
console.log(findSums(list, k));
