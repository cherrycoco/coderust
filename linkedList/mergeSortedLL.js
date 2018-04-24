const mergeSortedLL = (headA, headB) => {
  let resultHead;
  let result;
  let nodeA = headA;
  let nodeB = headB;

  if (nodeA.val <= nodeB.val) {
    resultHead = nodeA;
    result = nodeA;
    nodeA = nodeA.next;
  } else {
    resultHead = nodeB;
    result = nodeB;
    nodeB = nodeB.next;
  }

  while (nodeA || nodeB) {
    if ( !nodeB || nodeA.val <= nodeB.val) {
      result.next = nodeA;
      result = nodeA;
      nodeA = nodeA.next;
    } else if (!nodeA || nodeB.val < nodeA.val) {
      result.next = nodeB;
      result = nodeB;
      nodeB = nodeB.next;
    }
  }

  return resultHead;
}

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(2);
let b = new Node(5);
let c = new Node(8);
let d = new Node(10);

a.next = b;
b.next = c;
c.next = d;

let e = new Node(1);
let f = new Node(5);
e.next = f;


console.log(mergeSortedLL(a, e));