/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let z = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      z++;
    } else {
      i++;
    }
  }
  while (z) {
    nums.push(0);
    z--;
  }
};
