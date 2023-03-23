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

  remove(index) {
    let removedElement;
    if (index < 0 || index > this.size - 1) {
      console.log("incorrect index");
    } else if (index === 0) {
      removedElement = this.head;

      this.head = this.head.next;
      this.size--;

      return removedElement.value;
    } else {
      let previous = this.head;

      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      removedElement = previous.next;
      const nextToNext = removedElement.next;
      previous.next = nextToNext.next;

      this.size--;
      return removedElement.value;
    }
  }

  removeByValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedValue = prev.next;
        prev.next = removedValue.next;
        this.size--;
        return removedValue.value;
      }
    }

    return null;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
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

console.log("list.remove(3)", list.remove(3));

console.log("list.removeByValue(0)", list.removeByValue(0));

console.log("list.search(3)", list.search(3));
console.log("list.search(10)", list.search(10));

list.print();

list.reverse();
list.print();
