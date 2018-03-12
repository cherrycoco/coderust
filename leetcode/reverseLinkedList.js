// 206. Reverse Linked List

// Reverse a singly linked list.

var reverseList = function(head) {
  let prevNode = null;
  let currNode = head;

  while (currNode) {
    let tempNext = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNext;
  }

  return prevNode;
};
