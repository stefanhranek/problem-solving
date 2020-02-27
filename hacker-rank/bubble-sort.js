function countSwaps(a) {
  let counter = 0;
  for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        counter++;
      }
    }
  }
  console.log("Array is sorted in " + counter + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[a.length - 1]);
}
