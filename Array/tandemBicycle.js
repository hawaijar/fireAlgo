/*
You're given a two arrays representing speeds of pairs of tandemBicycles (red/shirt speeds and blue/shirt speeds)
Each tandem bicycle is ride by a pair of (redshirt, blueshirt).
Suppose if a tandem pair is (4,2), max speed is 4, min speed is 2.
Write a function that takes these wo arrays and a flag 'fastest' (boolean) and return max possible speed (if fastest is true)
and min possible speed(if fastest = false)
 */

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // first sort the speeds
  let rSpeeds = redShirtSpeeds.sort((a, b) => b - a);
  let bSpeeds = blueShirtSpeeds.sort((a, b) => b - a);
  let sum = 0;
  if (fastest) {
    while (rSpeeds.length > 0) {
      if (rSpeeds[0] > bSpeeds[0]) {
        sum += rSpeeds[0];
        rSpeeds.shift();
        bSpeeds.pop();
      } else {
        sum += bSpeeds[0];
        bSpeeds.shift();
        rSpeeds.pop();
      }
    }
  } else {
    while (rSpeeds.length > 0) {
      sum += Math.max(rSpeeds.pop(), bSpeeds.pop());
    }
  }
  return sum;
}

let redShirtSpeeds = [5, 5, 3, 9, 2];
let blueShirtSpeeds = [3, 6, 7, 2, 1];
console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, true));
