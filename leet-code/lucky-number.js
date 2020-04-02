var findLucky = function(arr) {
  let count = 1;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      if (arr[i] === count) {
        return count;
      }
      count = 1;
    }
  }
  return -1;
};
