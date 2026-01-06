/**
 * 
 *  Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

------------------------------------------------------------------------
Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
------------------------------------------------------------------------
Example 2:

Input: head = [1], n = 1
Output: []
------------------------------------------------------------------------
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
 */

var removeNthFromEnd = function (head, n) {
    let slow = head;
    let fast = head;

    // Move fast ahead by n steps
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // If fast is null, we must remove the first node
    if (fast === null) {
        return head.next;
    }

    // Move both until fast reaches the last node
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from the end
    slow.next = slow.next.next;

    return head;
};
