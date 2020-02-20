function diagonalDifference(arr) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let absoluteDifference = 0; //return

  for (let i = 0; i < arr.length; i++) {
    firstDiagonalSum += arr[i][i];
    console.log("THIS LENGGTH", arr.length);
  }

  for (let j = 0, k = arr.length - 1; j < arr.length; j++, k--) {
    console.log(arr[j][k]);
    secondDiagonalSum += arr[j][k];
    console.log("secondDS", secondDiagonalSum);
  }

  absoluteDifference = Math.abs(firstDiagonalSum - secondDiagonalSum);
  return absoluteDifference;
}
