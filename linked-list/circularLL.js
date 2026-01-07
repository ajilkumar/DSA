// Node class for each element in the list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Returns number of nodes
  size() {
    if (!this.head) return 0;

    let count = 1;
    let current = this.head.next;

    while (current !== this.head) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Add at the beginning
  addFirst(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // circular link
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    newNode.next = this.head;
    current.next = newNode;
    this.head = newNode;
  }

  // Add at the end
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
  }

  // Add at a specific index
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }

    if (index === 0) {
      this.addFirst(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Remove first node
  removeFirst() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = this.head.next;
    this.head = this.head.next;
  }

  // Remove last node
  removeLast() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next !== this.head) {
      current = current.next;
    }

    current.next = this.head;
  }

  // Remove at specific index
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid index");
      return;
    }

    if (index === 0) {
      this.removeFirst();
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  // Print the circular list
  print() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let output = "";

    do {
      output += current.data + " -> ";
      current = current.next;
    } while (current !== this.head);

    console.log(output + "(back to head)");
  }
}


// Example usage:
const list = new CircularLinkedList();

list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addAt(1, 15);   // 10 -> 15 -> 20 -> 30

list.print();

list.removeAt(2);   // removes 20
list.print();

list.removeFirst();
list.removeLast();
list.print();
