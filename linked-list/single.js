//piece of data - val
//reference to next node - next
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    //         this.length += 1
    if (!this.head) {
      //if no item in node
      this.head = newNode;
      this.tail = this.head;
    } else {
      //find new tail and add current value in node,
      //so old tail pointing to new node and change tail val to the new pushed element
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; //return whole list;
  }
  pop() {
    //remove the node from the end of list
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.tail = newTail;
    this.tail.next = null;
    return current;
  }
  shift() {
    //remove node from the begining of the list
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 1) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    //add new node at the beginning of the list
    let addNode = new Node(val);
    if (!this.head) {
      this.head = addNode;
      this.tail = addNode;
    } else {
      //do need to add else other wise it will addNode itself in next
      addNode.next = this.head;
      this.head = addNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    //retrieving a node by its position in the list
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let count = 0;
      let currNode = this.head;
      while (count !== index) {
        count++;
        currNode = currNode.next;
      }
      return currNode;
    }
  }
  set(index, val) {
    //change the value of the node based on the position of list
    let valueOfIndex = this.get(index); //make use of get method
    if (!valueOfIndex) return false;
    valueOfIndex.value = val;
    return true;
  }
  insert(index, val) {
    //add a node to the list at specific position
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val); //! return boolean !-> false !! --> true
    if (index === this.length) return !!this.push(val);

    //if index lies in between
    let newNode = new Node(val);
    let prev = this.get(index - 1); //get prev val
    let temp = prev.next; //get curr val of index in list
    prev.next = newNode; //save next val of prev to upcoming node
    newNode.next = temp; // save next val of node to temp val
    this.length++;
    return true;
  }
  remove(index) {
    //remove the node from list at specific position
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    //index lies in between
    let prev = this.get(index - 1);
    let removeNode = prev.next;
    prev.next = removeNode.next;
    this.length--;
    return removeNode;
  }
  reverse() {
    //reverse the list
    let node = this.head;
    //swap head and tail
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null; //as we initiate from head so head's prev val is null
    for (let i = 0; i < this.length; i++) {
      next = node.next; //200
      node.next = prev; //null
      prev = node; //100
      node = next; //200
    }
    return this;
    //[100,200,300,400,500] --> [500, 200, 300, 400, 100]
    //curr = 100, next = 200, prev = null ===> 100-> null
    //curr= 200, next= 300, prev = 100 ===> 200 -> 100 -> null
    //curr= 300, next= 400, prev = 200 ===> 300-->200 -> 100 -> null
    //curr= 400, next= 500, prev = 300 ===> 400-->300-->200 -> 100 -> null
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

let list = new SinglyLinkedList();
// list.push()
