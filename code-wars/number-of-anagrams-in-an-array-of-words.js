function anagramCounter(wordsArray) {
  var counter = 0;

  var wordSorted = wordsArray.map(word => {
    var sortedWords = [...word].sort().join("");
    return [...word].sort().join("");
  });

  console.log(wordSorted);
  wordSorted.forEach((word, i) => {
    for (var j = i; j < wordSorted.length; j++) {
      if (wordSorted[i] === wordSorted[j + 1]) counter++;
    }
  });

  return counter;
}
