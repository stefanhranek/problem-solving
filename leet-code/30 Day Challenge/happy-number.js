/* 
    Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: 
    Starting with any positive integer, 
    replace the number by the sum of the squares of its digits, 
    and repeat the process until the number equals 1 (where it will stay), 
    or it loops endlessly in a cycle which does not include 1. 
    Those numbers for which this process ends in 1 are happy numbers.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = n;
  let newsum = 0;
  let limit = 1000;
  while (limit) {
    sum
      .toString()
      .split("")
      .forEach(digit => (newsum += digit * digit));
    sum = newsum;
    newsum = 0;
    limit--;
  }
  if (sum === 1) {
    return true;
  } else {
    return false;
  }
};
