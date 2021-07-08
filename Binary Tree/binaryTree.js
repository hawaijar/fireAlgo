class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
function height(tree) {
  if (!tree) return -1;
  return 1 + Math.max(height(tree.left), height(tree.right));
}
function balanceFactor(tree) {
  if (!tree) return 0;
  return height(tree.left) - height(tree.right);
}
function isBalance(tree) {
  if (!tree) return true;
  return Math.abs(balanceFactor(tree)) <= 1;
}
function isTreeBalance(tree) {
  if (!tree) return true;
  return isBalance(tree) && isBalance(tree.left) && isBalance(tree.right);
}
function populate(array) {
  let tree = null;
  const nodes = array.map((obj) => new BinaryTree(obj.value));
  for (let obj of array) {
    const { left, parent, right, value } = obj;
    const node = nodes.find((n) => n.value === value);
    if (parent === null) {
      tree = node;
    }
    node.left = nodes.find((n) => n.value === +left);
    node.right = nodes.find((n) => n.value === +right);
    node.parent = parent;
  }
  return [tree, nodes];
}

function inOrderTraverse(tree) {
  if (!tree) return "";
  inOrderTraverse(tree.left);
  console.log(tree.value);
  inOrderTraverse(tree.right);
}
function findInOrderSuccessor(tree, node) {
  let successor = null;
  let previous = null;

  function inOrder(tree) {
    if (!tree) return;
    inOrder(tree.left);
    if (previous === node && !successor) {
      successor = tree;
    }
    // ignore any duplicates!
    if (node.value === tree.value && !successor) {
      previous = node;
    }
    inOrder(tree.right);
  }
  inOrder(tree);
  if (successor) {
    return successor.value;
  }
  return null;
}

const arr = [
  { id: "1", left: "-2", parent: null, right: null, value: 1 },
  { id: "-2", left: "-3", right: null, value: -1 },
  { id: "-3", left: "-4", right: null, value: -2 },
  { id: "-4", left: "-5", right: null, value: -3 },
  { id: "-5", left: "-6", right: null, value: -4 },
  { id: "-6", left: null, right: null, value: -6 },
];
const tree = new BinaryTree(1);
const two = new BinaryTree(2);
const four = new BinaryTree(4);
const four2 = new BinaryTree(4);
const five = new BinaryTree(5);
const six = new BinaryTree(6);

tree.left = two;
tree.right = four;
two.left = four2;
four.right = five;
four2.left = six;

// const [tree, nodes] = populate(arr);
// const node = nodes.find((n) => n.value === 2);
// console.log(JSON.stringify(tree, null, 2));
// inOrderTraverse(tree);
// console.log(findInOrderSuccessor(tree, node));
console.log(height(tree));
console.log(balanceFactor(tree));
console.log(isTreeBalance(tree));
