/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
8?

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    console.log(nums)
    let maxSum = nums[0];
    let currentSum;
    if (nums.length===0) {return 0}
    if (nums.length===1) {return nums[0]}
    for (let i = 0; i < nums.length; i++) {
        currentSum = nums[i];
        for (let j = i; j < nums.length; j++) {
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
            if (j < nums.length-1) {
                currentSum += nums[j+1];
            }
        }
        console.log('this will be the answer',maxSum)
        console.log('this is the sum of the current subarray',currentSum)
    }
    return maxSum;
};