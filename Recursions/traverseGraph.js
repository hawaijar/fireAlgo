/* Number Of Ways To Traverse MxN grid from top-left to bottom-right
Given positive integers - width and height of a grid-shaped.
Write a function that returns the number of ways to reach the bottom right
corner of the graph when starting at the top left corner. You can move either go
down or right. In other words, you can never move up or left in the graph.
 */

function numberOfWaysToTraverseGraph(width, height) {
  const memo = {};
  function traverse(w, h, m = {}) {
    const key = `${w}:${h}`;
    if (w === 0 || h === 0) return 0;
    if (w > width || h > height) return 0;
    if (w === 1 && h === 1) return 1;

    if (key in m) return m[key];

    m[key] = traverse(w - 1, h) + traverse(w, h - 1);
    return m[key];
  }
  return traverse(width, height, memo);
}
