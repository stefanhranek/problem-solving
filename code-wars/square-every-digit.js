function squareDigits(num) {
  var stringyNum = num.toString();
  var answerArray = [];

  for (var i = 0; i < stringyNum.length; i++) {
    var squareThis = stringyNum[i];
    var squaredNum = squareThis * squareThis;
    answerArray.push(squaredNum);
  }

  var answerString = answerArray.join("");
  var answerNumber = parseInt(answerString);
  return answerNumber;
}
