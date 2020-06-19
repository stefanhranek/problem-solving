function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let temp = arr[i];
      let idx = arr.indexOf(i + 1);
      arr[i] = arr[idx];
      arr[idx] = temp;
      swaps++;
    }
  }
  return swaps;
}

// not passing tests 10-12