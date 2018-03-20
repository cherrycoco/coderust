// 160. Intersection of Two Linked Lists

// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
// begin to intersect at node c1.


// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.

// const getIntersectionNode = function(headA, headB) {
//   if (!headA || !headB) return null;
  
//   let countA = 0;
//   let countB = 0;
//   let tailA = headA;
//   let tailB = headB;

//   while(tailA.next) {
//     countA++;
//     tailA = tailA.next;
//   }

//   while (tailB.next) {
//     countB++;
//     tailB = tailB.next;
//   }

//   if(tailA.val !== tailB.val) return null; 

//   tailA = headA;
//   tailB = headB;
//   let longest = Math.max(countA, countB);
//   if (longest === countA) {
//     while(countA !== countB) {
//       tailA = tailA.next;
//       countA--; 
//     }
//   } else {
//     while(countA !== countB) {
//       tailB = tailB.next;
//       countB--; 
//     }
//   }

//   while(tailA) {
//     if(tailA.val === tailB.val) {
//       return tailA;
//     }
//     tailA = tailA.next;
//     tailB = tailB.next;
//   }
// }

const getIntersectionNode = function(headA, headB) {
  let currA = headA;
  let currB = headB;

  while(currA !== currB) {
    if (!currA.next && !currB.next) {
      return null;
    }
    currA = currA.next || headB;
    currB = currB.next || headA;
  }

  return currA;
}