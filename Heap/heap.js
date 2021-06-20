class Heap {
  constructor() {
    this.heap = [null];
  }
  insert(num) {
    this.heap.push(num);
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor(idx / 2);
    if (this.heap.length > 2) {
      while (this.heap[idx] < this.heap[parentIdx]) {
        [this.heap[idx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[idx],
        ];
        idx = parentIdx;
        parentIdx = Math.floor(idx / 2);
        if (parentIdx < 1) {
          break;
        }
      }
    }
  }
  remove() {
    if (this.heap.length === 1) {
      throw new Error("Heap is empty");
    }
    let smallest = this.heap[1];
    // only 1 item case
    if (this.heap.length === 2) {
      this.heap.length = 1; // same as: this.heap.splice(2)
      return smallest;
    }

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1);
    // only two items case
    if (this.heap.length === 2) {
      return smallest;
    }
    // more than two items case
    let parentIdx = 1;
    let leftChildIdx = 2 * parentIdx;
    let rightChildIdx = 2 * parentIdx + 1;
    while (
      this.heap[parentIdx] >= this.heap[leftChildIdx] ||
      this.heap[parentIdx] >= this.heap[rightChildIdx]
    ) {
      if (this.heap[leftChildIdx] < this.heap[rightChildIdx]) {
        [this.heap[parentIdx], this.heap[leftChildIdx]] = [
          this.heap[leftChildIdx],
          this.heap[parentIdx],
        ];
        parentIdx = leftChildIdx;
      } else {
        [this.heap[parentIdx], this.heap[rightChildIdx]] = [
          this.heap[rightChildIdx],
          this.heap[parentIdx],
        ];
        parentIdx = rightChildIdx;
      }
      leftChildIdx = 2 * parentIdx;
      rightChildIdx = 2 * parentIdx + 1;
      if (
        leftChildIdx >= this.heap.length ||
        rightChildIdx >= this.heap.length
      ) {
        break;
      }
    }
    return smallest;
  }
  peek() {
    return this.heap[1];
  }
}

let heap = new Heap();
heap.insert(-1);
heap.insert(-2);
heap.insert(-3);
heap.insert(-4);
heap.insert(-5);
console.log(heap);
console.log(heap.peek());
heap.remove();
console.log(heap.peek());
heap.remove();
console.log(heap.peek());
heap.remove();
console.log(heap.peek());
heap.remove();
console.log(heap.peek());

// heap.insert(20);
// heap.insert(19);
// heap.insert(17);
// heap.insert(13);
// heap.insert(15);
// heap.insert(8);
// heap.insert(5);
// heap.insert(11);
// heap.insert(9);
// heap.insert(10);
// heap.insert(2);
// console.log(heap.heap);
//
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
// heap.remove();
// console.log(heap.peek());
