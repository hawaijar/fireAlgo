class MinMaxHeap {
  constructor(isMinHeap = true) {
    this.heap = [null];
    this.isMinHeap = isMinHeap;
    this.count = 0;
  }
  insert(num) {
    this.count += 1;
    this.heap.push(num);
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor(idx / 2);
    if (this.heap.length > 2) {
      while (
        this.isMinHeap
          ? this.heap[idx] < this.heap[parentIdx]
          : this.heap[idx] > this.heap[parentIdx]
      ) {
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
    this.count -= 1;
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
    if(leftChildIdx  >= this.heap.length) return;
    let rightChildIdx = 2 * parentIdx + 1;
    if(rightChildIdx >= this.heap.length) {
    	rightChildIdx = leftChildIdx;
	}

    while (
      this.isMinHeap
        ? this.heap[parentIdx] >= this.heap[leftChildIdx] ||
          this.heap[parentIdx] >= this.heap[rightChildIdx]
        : this.heap[parentIdx] <= this.heap[leftChildIdx] ||
          this.heap[parentIdx] <= this.heap[rightChildIdx]
    ) {
      if (
        this.isMinHeap
          ? this.heap[leftChildIdx] < this.heap[rightChildIdx]
          : this.heap[leftChildIdx] > this.heap[rightChildIdx]
      ) {
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
    if (this.count === 0) return 0;
    return this.heap[1];
  }
  size() {
    return this.count;
  }
}

module.exports = MinMaxHeap;

// let heap = new MinMaxHeap(false);
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
