function findNextSquare(sq) {
  let squareRoot = 0;
  squareRoot = Math.sqrt(sq);
  if (Number.isInteger(squareRoot)) {
    let squarePlusOne = squareRoot + 1;
    let finalSquare = Math.pow(squarePlusOne, 2);
    return finalSquare;
  } else {
    return -1;
  }
}
