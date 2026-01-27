/**
 * Substring With Concatenation of All Words
---------------------------------------------------------------------
Problem Statement
You are given a string s and an array of words words. All the words in words are of the same length.

Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters. The answer can be returned in any order.
-----------------------------------------------------------------------
Description

This problem tests your ability to scan through substrings of uniform size, use hash maps for frequency tracking, and perform basic string manipulation.
------------------------------------------------------------------
Input:
A string s consisting of lowercase English letters (1 ≤ s.length ≤ 100).

A list of strings words (1 ≤ words.length ≤ 5, 1 ≤ words[i].length ≤ 10) where all words[i] are the same length and contain only lowercase letters.
------------------------------------------------------------------
Output:
An array of integers representing all starting indices in s where the concatenation of all words in words starts.
------------------------------------------------------------------
Example 1:
Input: {"s": "barfoothefoobarman", "words": ["foo","bar"]}
Output: [0,9] 
Explanation: Substrings starting at index 0 ("barfoo") and 9 ("foobar") are both valid concatenations.

Constraints
1 ≤ s.length ≤ 100

1 ≤ words.length ≤ 5

1 ≤ words[i].length ≤ 10

All words[i] are of the same length

s and all words[i] consist of lowercase English letters only
 */

class Solution {
  /**
   * @param {string} s
   * @param {string[]} words
   * @return {number[]}
   */
  findSubstring(s, words) {
    if (!s || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    // Build frequency map for words
    const wordMap = new Map();
    for (let w of words) {
      wordMap.set(w, (wordMap.get(w) || 0) + 1);
    }

    const result = [];

    // Try all starting offsets
    for (let i = 0; i < wordLen; i++) {
      let left = i;
      let right = i;
      let seen = new Map();
      let count = 0;

      while (right + wordLen <= s.length) {
        const word = s.substring(right, right + wordLen);
        right += wordLen;

        // If word exists in target words
        if (wordMap.has(word)) {
          seen.set(word, (seen.get(word) || 0) + 1);
          count++;

          // If word is used too many times, move left pointer
          while (seen.get(word) > wordMap.get(word)) {
            const leftWord = s.substring(left, left + wordLen);
            seen.set(leftWord, seen.get(leftWord) - 1);
            left += wordLen;
            count--;
          }

          // If we matched all words
          if (count === wordCount) {
            result.push(left);
          }
        } else {
          // Reset window if word is not in words list
          seen.clear();
          count = 0;
          left = right;
        }
      }
    }

    return result.sort((a, b) => a - b);
  }
}

// Example Usage
const solution = new Solution();
console.log(solution.findSubstring("barfoothefoobarman", ["foo", "bar"])); // Output: [0, 9] 