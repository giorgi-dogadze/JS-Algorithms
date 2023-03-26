// insertion
// Search
// DFS
// BFS
// Deletion
// DFS - > Depth first Search ჩადის ბოლომდე მარცხნიდან მერე ერთით ზემოთ ამოდის და ყველა შვილს ნახულობს და ა.შ
// DFS: Preorder
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
      this.insertNode(this.root, node);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrderDFS(root) {
    if (root) {
      console.log(root.value);
      this.preOrderDFS(root.left);
      this.preOrderDFS(root.right);
    }
  }

  inOrderDFS(root) {
    if (root) {
      this.inOrderDFS(root.left);
      console.log(root.value);
      this.inOrderDFS(root.right);
    }
  }

  postOrderDFS(root) {
    if (root) {
      this.postOrderDFS(root.left);
      this.postOrderDFS(root.right);
      console.log(root.value);
    }
  }

  levelOrderBFS() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  minValue(root) {
    let min;
    while (root) {
      min = root.value;
      root = root.left;
    }
    console.log(min);
  }

  maxValue(root) {
    let max;
    while (root) {
      max = root.value;
      root = root.right;
    }
    console.log(max);
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(1);

console.log("tree.search(15)", tree.search(tree.root, 1));
console.log("---preOrderDFS----");
tree.preOrderDFS(tree.root); // 10 -> 5 -> 1 -> 13
console.log("----inOrderDFS---");
tree.inOrderDFS(tree.root); // 1 -> 5 -> 10 -> 13
console.log("---postOrderDFS----");
tree.postOrderDFS(tree.root); // 1 -> 5 -> 13 -> 10

console.log("---levelOrderBFS----");
tree.levelOrderBFS(tree.root); // 10 -> 5 -> 13 -> 1

console.log("---minValue----");
tree.minValue(tree.root); // 1

console.log("---maxValue----");
tree.maxValue(tree.root); // 13
//      10
//   5      13
// 1
