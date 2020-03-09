function getSecondLargest(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i; i--) {
    if (sortedNums[i - 1] < sortedNums[i]) {
      return sortedNums[i - 1];
    }
  }
}
