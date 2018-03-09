class MinHeap {
  constructor () {
    this.heap = [];
  }

  insert (val) {
    this.heap.push(val);
    let childIdx = this.heap.length - 1;
    let parentIdx = this.findParent(childIdx);

    if (this.heap.length > 1) {
      
      while (val < this.heap[parentIdx]) {
        [this.heap[parentIdx], this.heap[childIdx]] = [this.heap[childIdx], this.heap[parentIdx]];
        childIdx = parentIdx;
        parentIdx = this.findParent(childIdx);
      }
    } 
  }

  remove () {
    if (this.heap.length === 0) {
      return 'nothing to remove';
    }

    let lastIdx = this.heap.length - 1;
    [this.heap[lastIdx], this.heap[0]] = [this.heap[0], this.heap[lastIdx]];
    this.heap.splice(this.heap.length - 1, 1);
    let parentIdx = 0;
    let childrenIdx = this.findChildren(0);
    let minChild;

    if (childrenIdx.length === 2) {
      if (this.heap[childrenIdx[0]] < this.heap[childrenIdx[1]]) {
        minChild = childrenIdx[0]
      } else {
        minChild = childrenIdx[1];
      }
    } else if (childrenIdx.length === 1) {
      minChild = childrenIdx[0];
    }

    while (minChild && this.heap[parentIdx] > this.heap[minChild]) {
      [this.heap[minChild], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[minChild]];
      parentIdx = minChild;
      minChild = undefined;
    }
  }

  findParent (childIdx) {
    return (childIdx % 2 === 0 ? (childIdx - 2) / 2 : (childIdx - 1) / 2);
  }

  findChildren (parentIdx) {
    return [parentIdx * 2 + 1, parentIdx * 2 + 2];
  }
}

let minHeap = new MinHeap();
minHeap.insert(2);
minHeap.insert(7);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(1);

minHeap.remove();
minHeap.remove();
// minHeap.remove();
// minHeap.remove();
// minHeap.remove();
// minHeap.remove();
// minHeap.remove();
console.log(minHeap.heap);