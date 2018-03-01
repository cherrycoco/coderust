const inorderTraversal = (tree) => {
  let result = [];
  function recurse (node) {
    if (node.left) {
      recurse(node.left);
    }
    
    result.push(node.value);

    if(node.right) {
        recurse(node.right);
    }
  }

  recurse(tree);
  return result;
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

console.log(inorderTraversal(tree));