function miniMaxSum(arr) {
  let min = 0,
    max = 0;
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    min += sorted[i];
  }
  for (let j = 1; j < arr.length; j++) {
    max += sorted[j];
  }
  console.log(min, max);
}
