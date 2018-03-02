const isBinaryTree = (tree) => {
  let lastNode;
  let isBST = true;

  const recursion = (node) => {
    if (node.left) {
      recursion(node.left);
      if (node.value <= lastNode) {
        isBST = false;
      }
      lastNode = node.value;
    }
    
    if (!node.left && !node.right) {
      if (node.value <= lastNode) {
        isBST = false;
      }
      lastNode = node.value;
    }
    
    if (node.right) {
      recursion(node.right);
    }
  }

  recursion(tree);
  return isBST;
}

let tree = {
  value: 100,
  left: {
    value: 50,
    left: {
      value: 25
    },
    right: {
      value: 75
    }
  },
  right: {
    value: 200,
    left: {
      value: 125
    },
    right: {
      value: 300
    }
  }
}

console.log(isBinaryTree(tree));