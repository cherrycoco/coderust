const removeDuplicates = (head) => {
  let set = new Set();
  set.add(head.val);
  let node = head;

  while (node.next) {
    if (set.has(node.next.val)) {
      node.next = node.next.next;
    } else {
      set.add(node.next.val);
      node = node.next;
    }
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
let a2 = new Node('a');
let b2 = new Node('b');

a.next = b;
b.next = c;
c.next = a2;
a2.next = b2;

console.log(removeDuplicates(a));
