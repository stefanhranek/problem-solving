function persistence(num) {
  num = num.toString().split("");
  var result = 1;
  var counter = 0;
  if (num.toString().split("").length == 1) {
    return counter;
  } else {
    num.forEach(numStr => {
      result = parseInt(numStr) * result;
    });
    counter++;
  }
  if (result.toString().split("").length > 1) {
    counter += persistence(result);
  }
  return counter;
}
