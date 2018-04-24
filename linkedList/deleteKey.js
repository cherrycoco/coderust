const deleteKey = (head, key) => {
  let node = head; 

  if (head.val === key) {
    head = head.next; 
    return head;
  }

  while (node) {
    if (node.next.val === key) {
      node.next = node.next.next; 
    }
    node = node.next;
  }

  return head; 
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
console.log(a);

console.log(deleteKey(a, 'c'));