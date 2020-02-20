function findSum(n) {
  var sum = 0;
  for (var i = 3; i < n + 1; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
