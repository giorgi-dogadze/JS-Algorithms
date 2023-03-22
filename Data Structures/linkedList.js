class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //   adds item at the end of the list O(1s)
  prepend(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // adds item at the end of the list O(n)
  append(element) {
    const node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }
    this.size++;
  }

  insert(element, index) {
    if (index < 0 || index > this.size - 1) {
      console.log("incorrect index");
    } else if (index === 0) {
      this.prepend(element);
    } else {
      const node = new Node(element);
      let previous = this.head;

      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      node.next = previous.next;
      previous.next = node;

      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += curr.value + " ";
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);

list.append(5);

list.insert(0, 2);

list.print();
