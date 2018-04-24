// const nthFromLast = (head, n) => {
//   let count = 0; 
//   let node = head; 

//   while (node) {
//     count++;
//     node = node.next;
//   }
  
//   if (n >= count) {
//     return null;
//   }

//   node = head; 
//   while (count - n - 1 > 0) {
//     node = node.next; 
//     count--;
//   }

//   return node;
// }

const nthFromLast = (head, n) => {
  let fastPointer = head;
  let slowPointer = head;
  let count = n;

  while (count > 0) {
    if (!fastPointer) {
      return null;
    }
    fastPointer = fastPointer.next; 
    count--;
  }

  while (fastPointer) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(15);
let b = new Node(5);
let c = new Node(2);
let d = new Node(10);

a.next = b;
b.next = c;
c.next = d;

console.log(nthFromLast(a, 3));