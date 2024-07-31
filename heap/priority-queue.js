class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

//main focus is on priority rather than values
class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUpMax();
  }
  bubbleUpMax() {
    let idx = this.values.length - 1; //index of inserted element
    let element = this.values[idx]; //value of inserted element
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //find parent index
      let parent = this.values[parentIdx]; //parent value
      if (element.priority <= parent.priority) break;
      //otherwise swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; //to change to index of parent and child
    }
  }
  dequeueMax() {
    //remove element with highest priority in DESC order
    let maxVal = this.values[0];
    let end = this.values.pop(); //remove last element
    if (this.values.length > 0) {
      this.values[0] = end; //replace the new root with last element
      this.sinkDownMax();
    }
    return maxVal;
  }
  sinkDownMax() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      //find child of parents
      //also check if left and right childs are not out of bounds i.e array length
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let rightChild, leftChild;
      let maxChild = null;

      if (leftIdx < length) {
        //check left child if exist
        leftChild = this.values[leftIdx];
        if (leftChild.priority > element.priority) {
          maxChild = leftIdx;
        }
      }
      if (rightIdx < length) {
        //check right child if exist
        rightChild = this.values[rightIdx];
        if (
          (maxChild === null && rightChild.priority > element.priority) ||
          (maxChild !== null && rightChild.priority > leftChild.priority)
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
  // check for priority with asc order or min binary heap
  enqueueMin(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUpMin();
  }
  bubbleUpMin() {
    let idx = this.values.length - 1; //index of inserted element
    let element = this.values[idx]; //value of inserted element
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //find parent index
      let parent = this.values[parentIdx]; //parent value
      if (element.priority >= parent.priority) break;
      //otherwise swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; //to change to index of parent and child
    }
  }
  dequeueMin() {
    //remove element with highest priority in DESC order
    let maxVal = this.values[0];
    let end = this.values.pop(); //remove last element
    if (this.values.length > 0) {
      this.values[0] = end; //replace the new root with last element
      this.sinkDownMin();
    }
    return maxVal;
  }
  sinkDownMin() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      //find child of parents
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let rightChild, leftChild;
      let maxChild = null;

      if (leftIdx < length) {
        //check left child if exist
        leftChild = this.values[leftIdx];
        if (leftChild.priority < element.priority) {
          maxChild = leftIdx;
        }
      }
      if (rightIdx < length) {
        //check right child if exist
        rightChild = this.values[rightIdx];
        if (
          (maxChild === null && rightChild.priority < element.priority) ||
          (maxChild !== null && rightChild.priority < leftChild.priority)
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

let priorityList = new priorityQueue();
priorityList.enqueueMin("wake up", 1);
priorityList.enqueueMin("work", 4);
priorityList.enqueueMin("breakfast", 3);
priorityList.enqueueMin("lunch", 5);
priorityList.enqueueMin("yoga exercise", 2);
