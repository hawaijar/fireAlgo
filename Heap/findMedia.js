/*
Find Median from Data Stream
=============================
MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far.

Answers within 10-5 of the actual answer will be accepted.

Solution idea: refer below
https://www.youtube.com/watch?v=itmhHWaHupI

Idea:
	1. Create two heaps - smallHeap(maxHeap), largeHeap(minHeap)
	2. Add incoming numbers to smallHeap(by default)
	3. Two conditions to satisfy at any point in time -
		a. The two heaps should be balanced (max difference in their size should be 1)
		b. all elements in smallHeap <= all elements in largeHeap

 */
const MinMaxHeap = require("./minMaxHeap");

class MedianFinder {
  constructor() {
    this.smallHeap = new MinMaxHeap(false);
    this.largeHeap = new MinMaxHeap(true);
  }
  addNum(num) {
    this.smallHeap.insert(num);
    // 1. Make sure every number in smallHeap <= every number in largeHeap
    if (
      this.smallHeap.size() > 0 &&
      this.largeHeap.size() > 0 &&
      this.smallHeap.peek() > this.largeHeap.peek()
    ) {
      const temp = this.smallHeap.remove();
      this.largeHeap.insert(temp);
    }
    // 2. Make sure the two heaps are balanced
    if (this.smallHeap.size() === this.largeHeap.size() + 2) {
      const temp = this.smallHeap.remove();
      this.largeHeap.insert(temp);
    }
    if (this.largeHeap.size() === this.smallHeap.size() + 2) {
      const temp = this.largeHeap.remove();
      this.smallHeap.insert(temp);
    }
  }
  findMedian() {
    // base case
    if (this.smallHeap.size() === 0 && this.largeHeap.size() === 0) return null;

    // odd case
    if (this.smallHeap.size() > this.largeHeap.size()) {
      return this.smallHeap.peek();
    }
    if (this.largeHeap.size() > this.smallHeap.size()) {
      return this.largeHeap.peek();
    }
    // even case
    const max = this.smallHeap.peek();
    const min = this.largeHeap.peek();
    return (min + max) / 2;
  }
}
const mf = new MedianFinder();
mf.addNum(-1);
console.log(mf.findMedian());
mf.addNum(-2);
console.log(mf.findMedian());
mf.addNum(-3);
console.log(mf.findMedian());
mf.addNum(-4);
console.log(mf.findMedian());
mf.addNum(-5);
console.log(mf.findMedian());
