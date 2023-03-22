// Methods: LIFO
// push(element) - add at the top
// pop() = remove from the top
// peek() - get the value of the top element without removing
// isEmpty() - check if stack is is Empty
// size() - get the number of the elements in the stack
// print() - visualize the elements in the stack

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log("stack.isEmpty()", stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();

stack.print();
