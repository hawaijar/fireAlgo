/*
	Given a grid of 1s and 0s where 1s represent land and 0s represent water,
	find all the islands (1s surrounded with 0s in all 4 sides) and replaced them with 0s (sink them!).
	return the modified matrix where we remove the islands.

	Approach:
	1. Create an Aux structure with same dimension as matrix
	2. Initialize all entries of Aux with 'F'
	3. For each 1s in the borders of matrix(first row, last row, first col, last col), mark their Aux counterparts
	   as 'T' and their BFS neighbours also 'T'
	4. Finally, traverse the matrix and for 1s whose Aux values are 'F's (islands), replace them with 0s.
	5. return the modified matrix.
 */

function getNeighbours(matrix, i, j) {
  const neighbors = [];
  // north neighbour
  if (i - 1 >= 0) {
    neighbors.push([i - 1, j]);
  }
  // south neighbour
  if (i + 1 <= matrix.length - 1) {
    neighbors.push([i + 1, j]);
  }
  // west neighbour
  if (j - 1 >= 0) {
    neighbors.push([i, j - 1]);
  }
  // east neighbour
  if (j + 1 <= matrix[0].length - 1) {
    neighbors.push([i, j + 1]);
  }
  return neighbors;
}

function findOnesConnectedToBorder(matrix, i, j, aux) {
  const queue = [[i, j]];

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    const visitedStatus = aux[row][col];
    if (visitedStatus === "F") {
      // mark this position as 'visited'
      aux[row][col] = "T";
      const neighbours = getNeighbours(matrix, row, col);
      for (let [r, c] of neighbours) {
        if (matrix[r][c] === 1) {
          queue.push([r, c]);
        }
      }
    }
  }
}

function countIslands(matrix) {
  const ROW = matrix.length;
  const COL = matrix[0].length;

  const aux = new Array(ROW).fill([]);
  for (let i = 0; i < ROW; i++) {
    aux[i] = new Array(COL).fill("F");
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      const rowBorder = i === 0 || i === ROW - 1;
      const columnBorder = j === 0 || j === COL - 1;
      const isBorder = rowBorder || columnBorder;
      if (isBorder) {
        if (matrix[i][j] === 1) {
          findOnesConnectedToBorder(matrix, i, j, aux);
        }
      }
    }
  }

  let counter = 0;
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (matrix[i][j] === 1 && aux[i][j] === "F") {
        counter += 1;
        // Set all neighbouring 1s (if available) to be "T"
        findOnesConnectedToBorder(matrix, i, j, aux);
      }
    }
  }
  console.log(matrix);
  return counter;
}

const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];
const result = countIslands(matrix);
console.log(result);
