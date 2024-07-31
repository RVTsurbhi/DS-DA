class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    //insert into heap
    let idx = this.values.length - 1; //index of inserted element
    let element = this.values[idx]; //value of inserted element
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //find parent index
      let parent = this.values[parentIdx]; //parent value
      if (element <= parent) break;
      //otherwise swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; //to change to index of parent and child
    }
  }
  extractMax() {
    let maxVal = this.values[0];
    let end = this.values.pop(); //remove last element
    if (this.values.length > 0) {
      this.values[0] = end; //replace the new root with last element
      this.sinkDown();
    }
    return maxVal;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      //find child of parents

      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let rightChild, leftChild;
      let maxChild = null;
      //also check if left or right childs are not out of bounds i.e arr length
      if (leftIdx < length) {
        //check left child if exist
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          maxChild = leftIdx;
        }
      }
      if (rightIdx < length) {
        //check right child if exist
        rightChild = this.values[rightIdx];
        if (
          (maxChild === null && rightChild > element) ||
          (maxChild !== null && rightChild > leftChild)
        ) {
          maxChild = rightIdx;
        }
      }
      if (maxChild === null) break;
      //swap parent and child
      this.values[idx] = this.values[maxChild];
      this.values[maxChild] = element;
      idx = maxChild;
    }
  }
}

let heap = new MaxBinaryHeap();
// heap.insert(75)
