// Given a singly linked list, determine if it is a palindrome.

// Follow up:
// Could you do it in O(n) time and O(1) space?

const palindromeLinkedList = (head) => {
  let node = head;
  let tail;

  while (node) {
    if (node.next) {
      node.next.previous = node;
    } else {
      tail = node; 
    }

    node = node.next;
  }

  node = head; 

  while (node && tail) {
    if (node.val === tail.val) {
      node = node.next;
      tail = tail.previous;
    } else {
      return false; 
    }
  }

  return true;
}

let head = {val: 2, next: {val: 5, next: {val: 4, next: null}}}

console.log(palindromeLinkedList(head));