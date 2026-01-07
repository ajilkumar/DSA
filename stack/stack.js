// Basic Stack implementation in JavaScript

class Stack {
  constructor() {
    this.stack = [];
  }

  // Add element to top of stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // View the top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.size() === 0;
  }

  // Get number of elements
  size() {
    return this.stack.length;
  }

  // Print stack elements
  print() {
    console.log(this.stack.join(" -> "));
    // console.log(this.stack)
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();   // 10 -> 20 -> 30

console.log(stack.peek());  // 30

stack.pop();
stack.print();   // 10 -> 20

console.log(stack.isEmpty()); // false
