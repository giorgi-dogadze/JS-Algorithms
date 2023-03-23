// insertion
// Search
// DFS
// BFS
// Deletion

class Node {
  constructor(value) {
    {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }
}
