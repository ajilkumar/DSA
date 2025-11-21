// Palindrome number checker using recursion


function isPalindrome(num) {
  // Convert number to string
  const str = num.toString();

  // Recursive helper function
  function check(start, end) {
    // Base case: crossed over or met in the middle
    if (start >= end) return true;

    // If mismatch, not a palindrome
    if (str[start] !== str[end]) return false;

    // Recur inward
    return check(start + 1, end - 1);
  }

  return check(0, str.length - 1);
}

// Example usage:
console.log(isPalindrome(121)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123)); // false
