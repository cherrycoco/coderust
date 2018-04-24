const reverseLinkedList = (head) => {
  let node = head; 
  let prevNode = null;

  while (node) {
    let nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }

  return prevNode;
}

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');

a.next = b;
b.next = c;

// console.log(a);

console.log(reverseLinkedList(a));



