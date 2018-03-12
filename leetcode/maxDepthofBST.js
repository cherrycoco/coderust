// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

// var maxDepth = function(root) {
//   let queueOne = [root];
//   let queueTwo = [];
//   let count = 0;

//   while (queueOne.length > 0) {
//     queueTwo = queueOne.slice(0);
//     queueOne = [];
//     count++;
//     for (let i = 0; i < queueTwo.length; i++) {
//       if (queueTwo[i].left) {
//         queueOne.push(queueTwo[i].left);
//       }
      
//       if (queueTwo[i].right) {
//         queueOne.push(queueTwo[i].right);
//       }
//       console.log(queueOne);
//     }

//     queueTwo = [];
//   }

//   return count;
// };

var maxDepth = function(root) {
  if(root === undefined || root === null){
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let tree = {val: 5, left: {val: 3, left: {val: 2, left: null, right: null}, right: null}, right: null};

console.log(maxDepth(tree));