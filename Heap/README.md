## Note
The ```minMaxHeap``` file can be used to create both ```minHeap``` and ```maxHeap``` structures.

For creating ```minHeap``` -
```
const minHeap = new MinMaxHeap(true);
```

For creating ```maxHeap``` -
```
const maHeap = new MinMaxHeap(false);
```

For Adding new number, x -
```
minHeap.insert(x);
  or
maxHeap.insert(x);
```

For removing from the heap -
```
minHeap.remove();
  or
maxHeap.remove();
```

For peeking ```minHeap``` or ```maxHeap```
```
minHeap.peek();
  or
maxHeap.peek();
```
