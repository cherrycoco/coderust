const insertionSort = (head) => {
  let node = head.next;
  let sortedHead = new Node(head.val);
  let sortedNode = sortedHead; 
  let prevSortedNode = null; 

  while (node) {
    
    let temp = new Node(node.val);
    while (sortedNode) {
      if (sortedNode.val > temp.val) {
        if (!prevSortedNode) {
          temp.next = sortedHead; 
          sortedHead = temp; 
        } else {
          temp.next = prevSortedNode.next; 
          prevSortedNode.next = temp;
        }
        break;
      }

        prevSortedNode = sortedNode;
        sortedNode = sortedNode.next;
    }

    sortedNode = sortedHead; 
    prevSortedNode = null; 
    node = node.next; 
  }

  return sortedHead;
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

console.log(insertionSort(a));


