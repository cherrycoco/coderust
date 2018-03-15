// 101. Symmetric Tree

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

// var isSymmetric = function(root) {
//   let enQueue = [root];
//   let deQueue;
//   let tracker = true;

//   while (enQueue) {

//     for (let i = 0; i < enQueue.length; i++) {
//       if (enQueue[i]) {
//         tracker = true;
//         break;
//       } else {
//         tracker = false;
//       }
//     }

//     if (!tracker) return true;

//     if (!deQueue) {
//       deQueue = [...enQueue];
//       enQueue = [];
//     }

//     for (let i = 0; i < deQueue.length; i++) {
//       let currentNode = deQueue[i];
//       let mirrorNode = deQueue[deQueue.length - 1 - i];
//       if (currentNode && mirrorNode) {
//         if (currentNode.val !== mirrorNode.val) return false;
//       } else if (currentNode || mirrorNode){
//         return false; 
//       }
//       if (currentNode) {
//         currentNode.left ? enQueue.push(currentNode.left) : enQueue.push(null);
//         currentNode.right ? enQueue.push(currentNode.right) : enQueue.push(null); 
//       }
//     }
//     deQueue = undefined;
//   }
// };

var isSymmetric = function(root) {
  if (!root) return true;

  function compare (left, right) {
    if (!left && !right) return true; 
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    
    return compare(left.left, right.right) && compare(left.right, right.left);
  }
  
  return compare(root.left, root.right);
};


let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 6
    }
  }
}

console.log(isSymmetric(tree));