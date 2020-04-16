/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let leftBalance = 0,
    rightBalance = 0;

  for (let i = 0; i < s.length; i++) {
    leftBalance += s[i] === "(" || s[i] === "*" ? 1 : -1;
    rightBalance +=
      s[s.length - i - 1] === ")" || s[s.length - i - 1] === "*" ? 1 : -1;
    if (leftBalance < 0 || rightBalance < 0) return false;
  }

  return true;
};


/*

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].

*/