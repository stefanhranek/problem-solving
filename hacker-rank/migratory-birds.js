function migratoryBirds(arr) {
  let count = 1;
  let prevCount = 1;
  let birdMost;
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (birdMost == undefined) {
      birdMost = sorted[i];
    }
    if (sorted[i] === sorted[i + 1]) {
      count++;
    } else {
      if (count > prevCount) {
        prevCount = count;
        count = 1;
        birdMost = sorted[i];
      }
    }
  }
  return birdMost;
}
