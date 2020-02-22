function birthdayCakeCandles(ar) {
  let tallestCandleHeight = Math.max(...ar);
  let tallestCandlesArr = ar.filter(candle => candle === tallestCandleHeight);
  let amountOfTallCandles = tallestCandlesArr.length;
  return amountOfTallCandles;
}
