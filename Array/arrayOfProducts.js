/*
	array = [5, 1, 4, 2];
	expected o/p: [ 8, 40, 10, 20 ]
 */
function arrayOfProducts(array) {
  // base case
  if (array.length === 0) return [];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let range = [...array.slice(0, i), ...array.slice(i + 1)];
    result.push(range.reduce((a, b) => a * b, 1));
  }
  return result;
}

const array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));
