/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let totalShift = 0;

  for (let i = 0; i < shift.length; i++) {
    let direction = shift[i][0];
    let amount = shift[i][1];
    if (direction == 0) totalShift -= amount;
    else totalShift += amount;
  }

  let front = "";
  let back = "";

  if (totalShift < 0) {
    totalShift = Math.abs(totalShift) % s.length;
    front = s.substr(totalShift);
    back = s.substr(0, totalShift);
  } else if (totalShift > 0) {
    totalShift = totalShift % s.length;
    front = s.substr(s.length - totalShift, totalShift);
    back = s.substr(0, s.length - totalShift);
  } else return s;

  return front + back;
};

/*

You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). 
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

 

Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
Example 2:

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 

Constraints:

1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100
   Hide Hint #1  
Intuitively performing all shift operations is acceptable due to the constraints.
   Hide Hint #2  
You may notice that left shift cancels the right shift, so count the total left shift times (may be negative if the final result is right shift), and perform it once.

*/
