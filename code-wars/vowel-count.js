function getCount(str) {
  var vowelsCount = 0;
  for (i = 0; i < str.length; i++) {
    if (
      (str[i] == "a") |
      (str[i] == "e") |
      (str[i] == "i") |
      (str[i] == "o") |
      (str[i] == "u")
    ) {
      vowelsCount += 1;
    }
  }

  // create a for loop that checks each individual letter in string by indexing
  // if statement for presence of vowels
  // use count =+ to add 1 when there is vowel

  return vowelsCount;
}
