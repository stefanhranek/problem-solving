function highAndLow(numbers) {
  numbers = numbers.split(" ");
  var smallestNum = numbers[0];
  var highestNum = numbers[0];

  for (i = 1; i < numbers.length; i++) {
    if (+numbers[i] < +smallestNum) {
      smallestNum = numbers[i];
    }
    if (+numbers[i] > +highestNum) {
      highestNum = numbers[i];
    }
  }
  return `${highestNum} ${smallestNum}`;
}
