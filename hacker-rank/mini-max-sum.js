function miniMaxSum(arr) {
  // INITIAL THOUGHTS:
  // create variables to store min & max sums
  // iterate through array
  // use filter method to remove current number out of equation
  // store sum in min IF it is less than current value
  // store sum in max IF it is greater than current value
  // print end result - min & max numbers with space between
  // ADDITIONS:
  // applied a for loop inception iterate through new array of four ints
  // added each index of filteredArr to sumOfFourIntegers
  // included if statement to check if it was last iteration
  // if last iteration...
  // if min/max is undefined, which it is upon start
  // if so then assign sumOfFourIntegers to both variables
  // if min/max is defined, which it should be after first iteration...
  // re-assign min & max to sum if applicable
  // THEN reset sumOfFourIntegers back to zero for next iteration

  let min, max;
  let filteredArr = [];
  let sumOfFourIntegers = 0;
  for (let i = 0; i < arr.length; i++) {
    filteredArr = arr.filter(num => num !== arr[i]);
    // At this point we have separate filtered arrays to further iterate through
    for (let j = 0; j < filteredArr.length; j++) {
      sumOfFourIntegers += filteredArr[j];
      if (j === filteredArr.length - 1) {
        if (min === undefined) {
          min = sumOfFourIntegers;
          max = sumOfFourIntegers;
        } else {
          if (sumOfFourIntegers < min) {
            min = sumOfFourIntegers;
          }
          if (sumOfFourIntegers > max) {
            max = sumOfFourIntegers;
          }
        }
        sumOfFourIntegers = 0;
      }
    }
  }
  console.log(`${min} ${max}`);
}

// POST-SOLUTION NOTE: my code passed all but one test case
    // if arr is [5,5,5,5,5] we get undefined
    // this is due to my filter method
