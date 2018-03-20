// 141. Linked List Cycle

// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

const linkedListCycle = (head) => {
  if (!head) return false; 
  let slow = head; 
  let fast = head.next; 
    
  while (fast) {
    if (slow.val === fast.val) return true;
    if (!fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

