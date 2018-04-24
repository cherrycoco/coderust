const swapNthWithHead = (head, n) => {
  let count = 1; 
  let node = head; 
  let prevNode;

  if (n === 1 || !head) {
    return head;
  } else if (n === 2) {
    let temp = head.next;
    head.next = head.next.next;
    temp.next = head;
    return temp; 
  }

  while (count < n) {
    count++;
    prevNode = node;
    node = node.next;
  }

  let temp = head.next;
  prevNode.next = head;
  head.next = node.next; 

  node.next = temp; 

  return node;
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

console.log(swapNthWithHead(a, 3));
console.log(a);