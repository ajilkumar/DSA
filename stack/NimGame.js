/**
 * Nim Game

Hints
---------------------------------------------------------------------------------
You are playing a simple Nim Game with a friend:
Initially there is a single pile containing n stones.
You take the first turn, and then you and your friend alternate turns.
On each turn a player must remove 1, 2, or 3 stones from the pile.
The player who removes the last stone wins the game.

Given the integer n, determine whether you can force a win assuming both players always make the optimal moves. Return true if you can guarantee victory, otherwise return false.
---------------------------------------------------------------------------------
Example
Input: n = 4
Output: false
Explanation: No matter whether you take 1, 2, or 3 stones, you leave your opponent with a winning position (3, 2, or 1 stones respectively). Hence you will lose.
---------------------------------------------------------------------------------
Example
Input: n = 1
Output: true
Explanation: You take the only stone and win immediately.
---------------------------------------------------------------------------------
Example
Input: n = 2
Output: true
Explanation: You can take both stones at once and win.
Hint: Positions where the number of remaining stones is a multiple of 4 are losing positions for the player whose turn it is. All other positions are winning.
---------------------------------------------------------------------------------
 */

class Solution {
  /**
   * Determines if the first player can force a win in the stone pile game.
   * @param {number} n - The initial number of stones in the pile.
   * @return {boolean} - true if the first player can guarantee a victory, otherwise false.
   */
  canWinNim(n) {
    // Your implementation here
    return n % 4 !== 0;
  }
}
