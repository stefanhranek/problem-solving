function maximumToys(prices, k) {
  let toyCount = 0;
  let moneyLeft = k;
  prices.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < moneyLeft) {
      toyCount++;
      moneyLeft -= prices[i];
    } else {
      break;
    }
  }
  console.log(toyCount);
  return toyCount;
}
