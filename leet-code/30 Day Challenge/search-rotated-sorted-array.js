/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

var search = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;

  // Binary search
  while (left <= right) {
    var middle = Math.floor((right + left) / 2);

    // We have found our target
    if (nums[middle] === target) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      // If the middle element is greater than the element to the left
      // of it, then that means that the bottom half is strictly increasing
      // from left to middle, i.e. it is sorted and we can just do a normal
      // binary search.

      // Is the target in this range?
      if (nums[left] <= target && target < nums[middle]) {
        // 'recurse' down this side
        right = middle - 1;
      } else {
        // 'recurse' down the other side
        left = middle + 1;
      }
    } else {
      // This means that the *top* half must be sorted, because
      // there can only be one place in the entire array where
      // the order is not sorted, and it's on the bottom half.

      if (nums[middle] < target && target <= nums[right]) {
        // 'recurse' down this side
        left = middle + 1;
      } else {
        // 'recurse' down the other side
        right = middle - 1;
      }
    }
  }

  return -1;
};
