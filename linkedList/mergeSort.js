const mergeSort = (head) => {
  let count = 0; 
  let node = head;

  if (!node.next) {
    return head;
  }

  while (node) {
    count++;
    node = node.next;
  }

  let mid = Math.floor(count / 2);
  let headLeft = head; 
  let headRight = head;

  while (mid > 1) {
    headRight = headRight.next;
    mid--; 
  }

  let temp = headRight.next;
  headRight.next = null;
  headRight = temp; 

  let left = mergeSort(headLeft);
  let right = mergeSort(headRight); 

  let mergeHead;

  if (!right || left.val <= right.val) {
    mergeHead = left;
    left = left.next;
  } else if (!left || right.val < left.val){
    mergeHead = right;
    right = right.next;
  }

  let mergeTail = mergeHead; 

  while (left || right) {
    if (!right) {
      mergeTail.next = left;
      mergeTail = left; 
      left = left.next;
    } else if (!left) {
      mergeTail.next = right; 
      mergeTail = right;
      right = right.next;
    } else if(left.val <= right.val) {
      mergeTail.next = left;
      mergeTail = left; 
      left = left.next;
    } else if (right.val < left.val) {
      mergeTail.next = right; 
      mergeTail = right;
      right = right.next;
    }
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

a.next = b;
b.next = c;
c.next = d;

console.log(mergeSort(a));