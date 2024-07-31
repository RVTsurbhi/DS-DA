class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //next val of tail
      newNode.prev = this.tail; //prev val of node
      this.tail = newNode; //set tail to be newNode
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let popTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popTail.prev;
      this.tail.next = null;
      popTail.prev = null;
    }
    this.length--;
    return popTail;
  }
  shift() {
    //remove node from beginning
    //Note : there is no use case of using shift in double
    //better to choose single linked list
    if (this.length === 0) return undefined;
    let removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }
  unshift(val) {
    //add node at the beginning
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    //fetch node by index
    if (index < 0 || index >= this.length) return null;
    let midIndex = this.length / 2;
    let count, current;
    if (index <= midIndex) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      //             return current;
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    //fetch node by index and place the value
    let foundIndex = this.get(index);
    if (!foundIndex) return false;
    foundIndex.value = val;
    return true;
  }
  insert(index, val) {
    //add a node in a certain position
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    //if index lies in between
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    /* connection with prev node*/
    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    /* connection with next node*/
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    //index lies in between
    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;

    (beforeNode.next = afterNode), (afterNode.prev = beforeNode);
    (removeNode.next = null), (removeNode.prev = null);
    this.length--;
    return removeNode;
  }
  reverse() {
    //reverse the list
    let current = this.head;
    //swap head and tail
    this.head = this.tail;
    this.tail = current;
    let nextValue;
    for (let i = 0; i < this.length; i++) {
      nextValue = current.next;
      (current.next = current.prev), (current.prev = current);
      current = nextValue;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

let doubleList = new doublyLinkedList();

doubleList.push("Hogwarts");
doubleList.push("harry");
doubleList.push("harmoine");
doubleList.push("Ron");
