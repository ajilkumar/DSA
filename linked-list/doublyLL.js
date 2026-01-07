// Node class for each element in the list
class Node {
  constructor(data) {
    this.data = data;   // Value stored
    this.next = null;  // Pointer to next node
    this.prev = null;  // Pointer to previous node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;  // First node in the list
  }

  // Returns the number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Adds a node at the beginning
  addFirst(data) {
    const newNode = new Node(data);

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this.head = newNode;
  }

  // Adds a node at the end
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
    newNode.prev = current;
  }

  // Adds a node at a specific index
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
    newNode.prev = current;

    if (current.next) {
      current.next.prev = newNode;
    }

    current.next = newNode;
  }

  // Removes the first node
  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }
  }

  // Removes the last node
  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.prev.next = null;
  }

  // Removes node at a given index
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
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next.prev = current.prev;
    }

    if (current.prev) {
      current.prev.next = current.next;
    }
  }

  // Prints all nodes
  print() {
    let current = this.head;
    let output = "";

    while (current) {
      output += current.data + " <-> ";
      current = current.next;
    }

    console.log(output + "null");
  }
}


// Example usage:
const list = new DoublyLinkedList();

list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addAt(1, 15);   // 10 <-> 15 <-> 20 <-> 30

list.print();

list.removeAt(2);   // removes 20
list.print();

list.removeFirst();
list.removeLast();

list.print();
