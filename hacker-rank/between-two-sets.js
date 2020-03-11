function getTotalX(a, b) {
  console.log(a, b);
  let startBetween = a[a.length - 1];
  let endBetween = b[0];
  console.log("last of first array", startBetween);
  console.log("first of second array", endBetween);
  let betweenNumbers = [];
  let counter = 0;
  for (let i = endBetween; i >= startBetween; i--) {
    if (i % a[0] === 0 && i % a[1] === 0) {
      let trueChecker = false;
      // betweenNumbers.push(i);
      for (let j = 0; j < b.length; j++) {
        if (b[j] % i === 0) {
          trueChecker = true;
        } else {
          trueChecker = false;
          break;
        }
      }
      if (trueChecker === true) {
        counter++;
      }
    }
  }
  console.log(counter);
  return counter;
}
