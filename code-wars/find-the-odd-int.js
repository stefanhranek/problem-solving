function findOdd(A) {
  var numCount = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        numCount++;
      }
    }
    if (numCount % 2 !== 0) {
      return A[i];
    }
  }
}
