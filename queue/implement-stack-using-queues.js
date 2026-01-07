/**
 * Implement Stack using Queues

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
---------------------------------------------------------------------------------
Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 
---------------------------------------------------------------------------------
Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]
---------------------------------------------------------------------------------
Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 
 */

var MyStack = function() {
    this.q1 = [];   // main queue
    this.q2 = [];   // helper queue
};

/** 
 * Push element x onto stack.
 * @param {number} x
 */
MyStack.prototype.push = function(x) {
    // Step 1: Push to q2
    this.q2.push(x);

    // Step 2: Move all elements from q1 to q2
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }

    // Step 3: Swap q1 and q2
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
};

/**
 * Removes the element on top of the stack and returns it.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};
