const intersection = (headA, headB) => {
  let countA = countLL(headA);
  let countB = countLL(headB);
  let diff = Math.abs(countA - countB);
  let longerLL;
  let shorterLL; 

  if (countA > countB) {
    longerLL = headA;
    shorterLL = headB;
  } else {
    longerLL = headB;
    shorterLL = headA
  }

  while (diff > 0) {
    longerLL = longerLL.next;
    diff--;
  }

  while (longerLL) {
    if (longerLL.val === shorterLL.val) {
      return true; 
    }
    longerLL = longerLL.next;
    shorterLL = shorterLL.next;
  }

  return false; 
}

const countLL = (head) => {
  let count = 0;
  let node = head; 

  while (node) {
    count++;
    node = node.next;
  }

  return count;
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
let e = new Node(12);

a.next = b;
b.next = c;
c.next = d;

e.next = d;

console.log(intersection(a, e));