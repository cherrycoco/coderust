const rotateLL = (head, n) => {
  let count = 1;
  let tail = head; 

  while (tail.next) {
    count++;
    tail = tail.next;
  }

  n = n % count; 
  let node = head;

  if (Math.abs(n % count) === 0) {
    return head;
  }

  if (Math.sign(n) === -1) {
    n = count + n;
  }

  while (count - n > 1) {
    node = node.next;
    count--; 
  }

  let temp = node.next; 
  node.next = null; 
  tail.next = head; 

  return temp; 
}

const countLL = (head) => {
  
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
// c.next = d;
// d.next = e;

console.log(rotateLL(a, -5));