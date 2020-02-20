function plusMinus(arr) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroNumbers++;
      // console.log("0",zeroNumbers);
    } else if (arr[i] > 0) {
      positiveNumbers++;
      // console.log("pos",positiveNumbers);
    } else {
      negativeNumbers++;
      // console.log("neg",negativeNumbers);
    }
  }

  let positiveRatio = positiveNumbers / arr.length;
  let negativeRatio = negativeNumbers / arr.length;
  let zeroRatio = zeroNumbers / arr.length;

  console.log(parseFloat(positiveRatio).toFixed(6));
  console.log(parseFloat(negativeRatio).toFixed(6));
  console.log(parseFloat(zeroRatio).toFixed(6));
}
