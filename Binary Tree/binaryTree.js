class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
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
  { id: "1", left: "2", parent: null, right: "3", value: 1 },
  { id: "2", left: "4", parent: "1", right: "5", value: 2 },
  { id: "3", left: null, parent: "1", right: null, value: 3 },
  { id: "4", left: "6", parent: "2", right: null, value: 4 },
  { id: "5", left: null, parent: "2", right: null, value: 5 },
  { id: "6", left: null, parent: "4", right: null, value: 6 },
];
const [tree, nodes] = populate(arr);
const node = nodes.find((n) => n.value === 2);
// console.log(JSON.stringify(tree, null, 2));
// inOrderTraverse(tree);
console.log(findInOrderSuccessor(tree, node));
