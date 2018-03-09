// brute force O(mn)

// var getIntersectionNode = function(headA, headB) {
//   let currentNodeA = headA;
//   let currentNodeB = headB;
  
//   while (currentNodeA) {
//     while (currentNodeB) {
//       if (currentNodeA.val === currentNodeB.val) {
//           return currentNodeA.val;
//       }  
//       currentNodeB = currentNodeB.next;
//     }
    
//     currentNodeA = currentNodeA.next;
//   }
  
//   return null;
// };

const getIntersectionNode = function(headA, headB) {
  let storage = {};
  let currentNodeA = headA;
  let currentNodeB = headB;

  while (currentNodeA) {
    storage[currentNodeA.val] = true;
    currentNodeA = currentNodeA.next;
  }

  while (currentNodeB) {
    if (storage[currentNodeB.val]) {
      return currentNodeB.val;
    }
    currentNodeB = currentNodeB.next;
  }
  
  return null;
}

let headA = {val: 1, next: null}
let headB = {val: 1, next: null}

console.log(getIntersectionNode(headA, headB));