function constructMinHeightBst(array, bst = null, startIndex, endIndex) {
  // base case
  if (startIndex > endIndex) return;

  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const value = array[midIndex];
  if (bst === null) {
    bst = new BST(value);
  } else {
    bst.insert(value);
  }
  constructMinHeightBst(array, bst, startIndex, midIndex - 1);
  constructMinHeightBst(array, bst, midIndex + 1, endIndex);
  return bst;
}
/* --- Create a minimum/height BST from a sorted array ---------- */
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
/* --- Find largest kth value from BST -------------------------- */
function findKthLargestValueInBst(tree, k) {
  let count = 0;
  let result = -1;
  function recur(bst) {
    if (bst === null) return;

    recur(bst.right);
    count += 1;
    if(count === k) {
    	result = bst.value;
    	return;
	}
    recur(bst.left);
  }
  recur(tree);
  return result;
}

class BST {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this === null) {
      return new BST(value);
    }

    function addNode(node) {
      // base case
      if (node === null) {
        return new BST(value);
      }
      if (value <= node.value) {
        node.left = addNode(node.left);
      } else {
        node.right = addNode(node.right);
      }
      return node;
    }

    return addNode(this);
  }
  contains(value) {
    if (this.value === null) return false;
    const queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.value === value) return true;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return false;
  }
  minValue() {
    if (this.left === null) return this.value;
    return this.left.minValue();
  }
  remove(value) {
    function deleteNode(value, node, parent = null) {
      if (value < node.value) {
        if (node.left !== null) {
          parent = node;
          deleteNode(value, node.left, parent);
        }
      } else if (value > node.value) {
        if (node.right !== null) {
          parent = node;
          deleteNode(value, node.right, parent);
        }
      } else {
        // when we found the node to be deleted
        if (node.left !== null && node.right !== null) {
          // when the node has both left & right child
          // 1. get the minValue of its right child and overwrite its value
          // 2. delete the leftmost node of its right child
          node.value = node.right.minValue();
          deleteNode(node.value, node.right, parent);
        } else if (parent === null) {
          // is this the root node?
          if (node.left !== null) {
            node.value = node.left.value;
            node.right = node.left.right;
            node.left = node.left.left;
          } else if (node.right !== null) {
            node.value = node.right.value;
            node.left = node.right.left;
            node.right = node.right.right;
          } else {
            // root with both children empty --- don't do anything here (as per the requirement)
          }
        } else if (node === parent.left) {
          if (node.left === null && node.right === null) {
            parent.left = null;
          } else {
            parent.left = node.left !== null ? node.left : node.right;
          }
        } else if (node === parent.right) {
          if (node.left === null && node.right === null) {
            parent.right = null;
          } else {
            parent.right = node.right !== null ? node.right : node.left;
          }
        }
      }
      return node;
    }

    deleteNode(value, this);
  }
  // in-order
  traverse() {
    const result = [];
    if (this.value === null) return "Empty tree";

    function inOrder(node) {
      //base case
      if (node === null) return "";
      inOrder(node.left);
      result.push(node.value);
      inOrder(node.right);
    }

    inOrder(this);
    console.log(result);
  }
}

const bst = new BST(5);
bst.insert(4);
bst.insert(6);
bst.insert(3);
bst.insert(4);
bst.insert(6);
bst.insert(7);
bst.insert(1);

bst.traverse();
console.log(findKthLargestValueInBst(bst, 4));
