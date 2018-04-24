const reverseEvenNodes = (head) => {
  let node = head; 
  let evenList = null;

  while (node && node.next) {
    let temp = node.next.next;
    node.next.next = evenList; 
    evenList = node.next;
    node.next = temp;
    node = node.next;
  }

  return mergeList(head, evenList);
}

const mergeList = (odd, even) => {
  let mergeHead = odd;
  let merge = odd;
  odd = odd.next;
  let count = 0; 

  while (odd || even) {
    if (count % 2 === 0) {
      merge.next = even;
      merge = even; 
      even = even.next;
    } else {
      merge.next = odd;
      merge = odd;
      odd = odd.next;
    }

    count++;
  }

  return mergeHead; 
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
d.next = e;

console.log(reverseEvenNodes(a));