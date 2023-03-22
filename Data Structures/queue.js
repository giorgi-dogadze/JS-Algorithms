// enqueue
// dequeue
// peek
// isEmpty
// print

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
