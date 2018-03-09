class MinStack {
  constructor () {
    this.stack = [];
    this.min = Infinity;
  }

  // push onto the stack
  push (val) {
    this.stack.push(val);
    if (val < this.min) {
      this.min = val;
    }

    return this.stack;
  }

  // pop off the stack
  pop () {
    let removed = this.stack.pop();
    
    if (removed === this.min) {
      this.min = Math.min(...this.stack);
    }

    return removed;
  }

  // get top element
  top () {
    if (this.stack) {
      return this.stack[this.stack.length - 1];
    } 

    return null;
  }

  //get Min element with constant time
  getMin () {
    return this.min;
  }
};

let minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
minStack.pop();
minStack.pop();
minStack.push(1);

console.log(minStack.stack);
console.log(minStack.min);
