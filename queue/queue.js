// Queue follows FIFO (First In First Out) principle
// The first element added is the first one removed

class Queue {
  constructor() {
    // Array to store queue elements
    this.queue = [];
  }

  // Adds an element to the end of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Removes and returns the front element of the queue
  dequeue() {
    // If queue is empty, we cannot remove anything
    if (this.isEmpty()) {
      return "Underflow, cannot perform dequeue";
    }
    // shift() removes the first element
    return this.queue.shift();
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.size() === 0;
  }

  // Returns the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.queue[0];
  }

  // Returns the number of elements in the queue
  size() {
    return this.queue.length;
  }

  // Prints all elements of the queue
  print() {
    console.log(this.queue.join(" -> "));
  }
}


// Example usage:
const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.print();       // 10 -> 20 -> 30
console.log(q.peek());  // 10

q.dequeue();
q.print();       // 20 -> 30
