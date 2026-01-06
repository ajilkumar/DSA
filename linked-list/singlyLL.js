// Linked List in Javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Singly Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  //   Add at the beginning
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //   Add at the end
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  //   Size of the linked list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  //   Add at specific index
  addAt(data, index) {
    if (index < 0 || index > this.size()) {
      console.error(`Invalid index`);
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  //   Remove from top
  removeTop() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  //   Remove at specific index
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error(`Invalid index`);
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  //   Print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


const linkedList = new LinkedList()
linkedList.addFirst(5)
linkedList.addFirst(3)
linkedList.addFirst(8)
linkedList.addLast(10)

linkedList.removeTop()
linkedList.addAt(7,2)

linkedList.print()
console.log(`Size:`,linkedList.size())

