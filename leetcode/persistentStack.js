// Implement a persistent (i.e. immutable) stack data structure with 
// the following interface:
// 
// class PStack // representing a stack of integers
//   PStack() // i.e. a constructor
//   int size()
//   int peek() // returns the most recently pushed element
//   PStack push(int)
//   PStack pop()
// 

// Examples:

// s0 = PStack()
// s0: []

// s1 = s0.push(5)
// s1: [5], s0: []

// s2 = s1.push(6)
// s2: [5, 6], s1: [5], s0: []

// s3 = s1.push(7)
// s3: [5, 7], s1: [5]

// s4 = s3.pop()
// s4: [5], s3: [5, 7]

class Stack {
  constructor () {
    this.top = null;
    this.length = 0; 
  }
  
  size () {
    return this.length;
  }
  
  peek () {
    return this.top;
  }
  
  push (val) {
    let newStack = new Stack();
    
    if (!this.top) {
      newStack.top = {
        val: val,
        next: null,
      };
    } else {
      newStack.top = {
        val: val,
        next: this.top,
      }
    }
  
    newStack.length = this.length;
    newStack.length++;
    return newStack;
  }
  
  pop () {
    let newStack = new Stack();
    if (!this.top) {
      return 'nothing to pop here';
    }

    newStack.top = this.top.next;
    newStack.length = this.length; 
    newStack.length--;
    return newStack; 
  }
}

let stack = new Stack();

let stack1 = stack.push(1);
console.log('stack', stack.top);
console.log('stack1', stack1.top);
console.log('stack1 Size', stack1.size());
console.log('stack', stack.top);

let stack2 = stack1.push(2);
console.log('stack2', stack2.top);
let stack3 = stack2.push(3);
console.log('stack3', stack3.top);


let stack4 = stack3.pop();

console.log('stack4 Size', stack4.size());
console.log('stack4', stack4.top);
console.log('stack3', stack3.top);
console.log('stack1', stack1.top);