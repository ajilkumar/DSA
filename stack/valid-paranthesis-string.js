/**
 * 678. Valid Parenthesis String
---------------------------------------------------------------------------------
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
---------------------------------------------------------------------------------
Example 1:

Input: s = "()"
Output: true
---------------------------------------------------------------------------------
Example 2:

Input: s = "(*)"
Output: true
---------------------------------------------------------------------------------
Example 3:

Input: s = "(*))"
Output: true
 
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const openStack = [];   // stores indexes of '('
    const starStack = [];   // stores indexes of '*'

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === "(") {
            openStack.push(i);
        } 
        else if (char === "*") {
            starStack.push(i);
        } 
        else { // char === ')'
            if (!isEmpty(openStack)) {
                openStack.pop();
            } 
            else if (!isEmpty(starStack)) {
                starStack.pop(); // use '*' as '('
            } 
            else {
                return false;
            }
        }
    }

    // Now match remaining '(' with '*'
    while (!isEmpty(openStack) && !isEmpty(starStack)) {
        if (openStack.pop() > starStack.pop()) {
            return false; // '*' must come AFTER '('
        }
    }

    return isEmpty(openStack);
};

function isEmpty(stack) {
    return stack.length === 0;
}
