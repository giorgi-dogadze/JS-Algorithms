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

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(1);

console.log("tree.search(15)", tree.search(tree.root, 1));
tree.preOrder(tree.root); // 10 -> 5 -> 1 -> 13
