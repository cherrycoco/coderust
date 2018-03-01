const levelOrderTraversal = (tree) => {
  let result = [];
  let currentQueue = [tree];
  let nextQueue = [];
  let currentLevel = [];
  
  while (currentQueue.length > 0 || nextQueue.length > 0) {
    
    if (currentQueue.length > 0) {
      let currentNode = currentQueue.shift();
      currentLevel.push(currentNode.value);

      if (currentNode.left) {
        nextQueue.push(currentNode.left);
      }
      if (currentNode.right) {
        nextQueue.push(currentNode.right);
      }
    } 
    
    if (currentQueue.length === 0) {
      result.push(currentLevel);
      currentLevel = [];
      currentQueue = nextQueue;
      nextQueue = [];
    }
  }

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
    // left: {
    //   value: 125
    // },
    right: {
      value: 300
    }
  }
}

console.log(levelOrderTraversal(tree));
