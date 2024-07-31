//BST
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      //update current
      //for duplicate values
      if (value === current.value) return undefined;
      if (value < current.value) {
        //left side
        if (current.left === null) {
          //no left side put that value there
          current.left = newNode;
          return this;
        }
        //if node exist on left side update current next left node
        current = current.left;
      } else if (value > current.value) {
        //right side
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        //update current next right node
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      //loop till current value exist(till end of tree) & value not found
      if (value < current.value) {
        //left side
        current = current.left;
      } else if (value > current.value) {
        //right side
        current = current.right;
      } else {
        //value found
        return true;
      }
    }
    return false;
  }
  BFS() {
    //Breath First Search
    let node = this.root,
      data = [],
      queue = [];
    queue.push(this.root);

    //work like FIFO, take the 1st node from queue and push to data
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    //In this case start with the root and visited left side of root
    //after that visited right side of root
    let visitedNodes = [];
    let current = this.root;
    function traverse(node) {
      visitedNodes.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedNodes;
  }
  DFSPostOrder() {
    //in post order root is the last thing that visited
    //in this case we first explore all children then parent
    let visitedNodes = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.value);
    }
    traverse(current);
    return visitedNodes;
  }
  DFSInOrder() {
    //In this case we first visit the whole left side of node then right side
    let visitedNodes = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedNodes;
  }
}

let tree = new BST();

tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(35);
tree.insert(2);
tree.insert(7);
tree.insert(25);
